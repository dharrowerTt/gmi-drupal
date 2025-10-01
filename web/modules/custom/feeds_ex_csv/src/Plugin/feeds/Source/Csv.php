<?php

namespace Drupal\feeds_ex_csv\Plugin\feeds\Source;

use Drupal\feeds\Feeds\Source\FetcherSourcePluginBase;
use Drupal\feeds\Feeds\Source\SourcePluginInterface;
use Drupal\feeds\Feeds\Item\ItemInterface;

/**
 * @FeedsSource(
 *   id = "my_csv_test",
 *   title = @Translation("My CSV Test"),
 *   description = @Translation("Import from a CSV file.")
 * )
 */
class Csv extends FetcherSourcePluginBase implements SourcePluginInterface {

  public function __construct(array $configuration, $plugin_id, $plugin_definition) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    \Drupal::logger('feeds_ex_csv')->notice('Plugin constructed!');
  }

  public function getSourceElementIterator(ItemInterface $item) {
    \Drupal::logger('feeds_ex_csv')->notice('getSourceElementIterator called!');
    $content = $item->get('fetcher_result');
    $rows = array_map('str_getcsv', explode(PHP_EOL, trim($content)));
    return new \ArrayIterator($rows);
  }

}
