# GMI Drupal (gmidev.org) — Backup & Restore

Composer-based Drupal site backup for disaster recovery, local development, and hand‑offs.

> This repo **excludes** user uploads (`web/sites/*/files/`), Composer vendor code, and secrets (`settings.php`).

---

## Repository Layout

```
/
├─ composer.json
├─ composer.lock
├─ web/                # Drupal docroot
│  ├─ core/
│  ├─ modules/
│  ├─ themes/
│  ├─ sites/
│  │  └─ default/
│  │     ├─ (settings.php NOT committed)
│  │     └─ (files/ NOT committed)
│  └─ index.php
├─ database/           # optional DB dumps (.sql/.sql.gz)
├─ .gitignore
└─ .gitattributes
```

**Ignored on purpose**

- `web/sites/*/files/`, `web/sites/*/private/`
- `web/sites/*/settings.php`, `settings.local.php`, other secrets
- `vendor/` (recreated by Composer)
- Large binaries (e.g., videos) unless explicitly handled

---

## Requirements

- PHP 8.x
- Composer 2.x
- MySQL/MariaDB
- Apache or Nginx (docroot → `web/`)

---

## Quick Restore (Local)

1. **Clone**

   ```bash
   git clone https://github.com/dharrowerTt/gmi-drupal.git
   cd gmi-drupal
   ```

2. **Install dependencies**

   ```bash
   composer install
   ```

3. **Create `settings.php`**
   Create `web/sites/default/settings.php` (example):

   ```php
   <?php
   $databases['default']['default'] = [
     'database' => 'gmi_local',
     'username' => 'gmi_user',
     'password' => 'REDACTED',
     'host'     => '127.0.0.1',
     'port'     => '3306',
     'driver'   => 'mysql',
     'prefix'   => 'dr1l_',
     'collation'=> 'utf8mb4_general_ci',
   ];
   $settings['hash_salt'] = 'replace-with-random-string';
   // Optional: move config sync outside the webroot.
   // $settings['config_sync_directory'] = $app_root . '/../config/sync';
   ```

4. **Ensure files directory exists**

   ```bash
   mkdir -p web/sites/default/files
   ```

5. **Import the database**

   ```bash
   # Plain SQL
   mysql -u gmi_user -p gmi_local < database/your_dump.sql

   # Gzipped
   gunzip -c database/your_dump.sql.gz | mysql -u gmi_user -p gmi_local
   ```

6. **Post-restore**

   - Clear caches: visit `/core/rebuild.php` or run `drush cr` (if available).
   - Run updates at `/update.php` if needed.
   - Verify file permissions and base URL.

---

## Backups (How this repo is maintained)

- **Code:** `web/` (docroot) committed, excluding ignored paths.
- **DB:** export to `database/` (prefer `.sql.gz`).
- **Uploads:** backed up **outside Git** (zip/tar or object storage). For GitHub, consider attaching large assets as **Release** files.

---

## Deployment / Restore to a New Host

1. Provision PHP, MySQL, and a web server.
2. Clone this repo and run `composer install`.
3. Create a new DB and import the latest dump from `/database/`.
4. Create/adjust `web/sites/default/settings.php` for the new DB and environment.
5. Restore `web/sites/default/files/` from your off‑Git backup.
6. Point the virtual host’s docroot to the `web/` folder.
7. Clear caches; run database updates at `/update.php` if needed.

---

## Conventions & Tooling

- **Line endings:** enforced via `.gitattributes` (`LF` for source; `CRLF` for Windows scripts).
- **Secrets:** never commit real credentials. `settings.php` is **ignored** by Git.
- **Size limits:** GitHub rejects any single file >100 MB. Very large assets should not live in Git history.

---

## Troubleshooting

- **Push rejected (>100 MB file)**
  Remove the file from the commit and add a rule to `.gitignore`, then recommit and push. If it’s already in history, use `git filter-repo` or BFG to purge.

- **Can’t see DB in phpMyAdmin**
  The site’s DB may be on a different MySQL host or not attached to your cPanel user. Use Adminer or ask the host to attach the DB so it appears in phpMyAdmin.

---

## Maintainer / Contact

For questions about this repository or restores, contact:
**[dougie.harrower@tetratech.com](mailto:dougie.harrower@tetratech.com)**
