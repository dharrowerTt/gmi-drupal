<?php

namespace Drupal\custom_shortcode\Plugin\Filter;

use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;

/**
 * @Filter(
 *   id = "resource_block_filter",
 *   title = @Translation("Resource block shortcode"),
 *   description = @Translation("Replaces [resource_block:tid] with a rendered resource block."),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE
 * )
 */
class ResourceBlockFilter extends FilterBase {

  public function process($text, $langcode) {
    $pattern = '/\[resource_block:(\d+)\]/';
    $callback = function ($matches) {
      $tid = $matches[1];
      $render = views_embed_view('resource_library', 'block_1', $tid);
      return \Drupal::service('renderer')->renderPlain($render);
    };

    $text = preg_replace_callback($pattern, $callback, $text);
    return new FilterProcessResult($text);
  }
}
