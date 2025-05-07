<?php

$databases['default']['default'] = array (
  'prefix' => '',
  'database' => 'sites/default/files/.ht.sqlite',
  'driver' => 'sqlite',
  'namespace' => 'Drupal\\sqlite\\Driver\\Database\\sqlite',
  'autoload' => 'core/modules/sqlite/src/Driver/Database/sqlite/',
);
// Make it easier for Project Browser to install things into the local site.
$settings['skip_permissions_hardening'] = TRUE;

// Suppress the warning raised by `skip_permissions_hardening`.
// @see drupal_cms_installer_install_tasks()
putenv('IS_DDEV_PROJECT=1');

$settings['hash_salt'] = '9c1098c73ea1bb765e380cad2576c31a5863d7983f29525e239572a471884dc6';
$settings['config_sync_directory'] = 'C:\Users\dougie.harrower\Documents\drupal\config';
$config['package_manager.settings']['executables']['composer'] = 'C:\Users\dougie.harrower\Downloads\Drupal CMS\resources\app\bin\composer\bin\composer';