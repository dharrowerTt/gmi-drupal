# GMI-Drupal

This repository contains a Drupal site configured for use with the **Drupal CMS Desktop Launcher** — a lightweight desktop application that lets you run Drupal locally without needing to install web servers or command-line tools.

---

## 🚀 Quick Start (For Developers New to Git & Drupal)

These instructions assume you're working on a Windows PC and using the official [Drupal CMS Desktop Launcher](https://www.drupal.org/drupal-cms/launcher) for local development.

### ✅ 1. Install Git (if not installed yet)

Download and install Git from:
[https://git-scm.com/download/win](https://git-scm.com/download/win)

During setup, accept the defaults. Once installed, you can right-click in any folder and choose **"Git Bash Here"**.

---

### ✅ 2. Set Up the Project

#### First-time setup:

1. **Create a `drupal` folder** inside your `Documents` folder:

   ```
   C:\Users\YourName\Documents\drupal
   ```

2. **Clone this repository** into that folder using Git Bash or terminal:

   ```bash
   git clone https://github.com/dharrowerTt/gmi-drupal "%USERPROFILE%\Documents\drupal"
   ```

3. **Download the Drupal CMS Desktop app** from:
   [https://www.drupal.org/drupal-cms/launcher](https://www.drupal.org/drupal-cms/launcher)

4. Unzip the downloaded archive and **launch the `Drupal CMS.exe` file**.

> The app should automatically detect your `Documents\drupal` site and open it in the browser.

---

### 🔀 Updating Your Code from GitHub

Once you’ve cloned the repo, you can pull down any future updates by running:

```bash
cd ~/Documents/drupal
git pull
```

---

## 👥 Git Basics for New Collaborators

Here’s a crash course on common Git commands you’ll use:

### Ἑ5 To start working:

```bash
git pull         # Make sure your code is up to date
```

### 📂 To save and share your work:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 🧪 Optional: GitHub Actions (for CI/CD)

GitHub Actions is GitHub’s automation tool. You can use it to:

* Run tests automatically
* Deploy site assets
* Build reports or notifications

This project **doesn't currently use GitHub Actions**, but we can add one if needed:

* Example: auto-lint PHP code
* Example: deploy configuration to a remote server

Let us know if you'd like to add GitHub Actions and we’ll set up a starter workflow.

---

## 📂 What’s in This Repo?

This is a standard Composer-based Drupal project. Key directories:

* `/web` – Drupal's root folder (contains core, modules, themes)
* `/config` – Exported configuration (if using `drush config:export`)
* `composer.json` – Manages dependencies

---

## 💡 Need Help?

Reach out to the dougie.harrower@tetratech.com for assistance
