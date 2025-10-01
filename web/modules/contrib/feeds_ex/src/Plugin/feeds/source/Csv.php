<?php

namespace Drupal\feeds_ex_csv\Plugin\feeds\source;

use Drupal\feeds_ex\Plugin\feeds\source\FileBase;
use Drupal\feeds_ex\Feeds\Source\CSVParserTrait;

/**
 * Provides a CSV file source plugin.
 *
 * @FeedsSource(
 *   id = "csv",
 *   title = @Translation("CSV"),
 *   description = @Translation("Import content from a CSV file."),
 *   weight = 10
 * )
 */
class Csv extends FileBase {
  use CSVParserTrait;

  public function parse($data) {
    return $this->parseCSV($data);
  }
}
