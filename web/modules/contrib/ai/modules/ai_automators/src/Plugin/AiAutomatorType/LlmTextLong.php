<?php

namespace Drupal\ai_automators\Plugin\AiAutomatorType;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\ai_automators\Attribute\AiAutomatorType;
use Drupal\ai_automators\PluginBaseClasses\ComplexTextChat;
use Drupal\ai_automators\PluginInterfaces\AiAutomatorTypeInterface;

/**
 * The rules for a text_long field.
 */
#[AiAutomatorType(
  id: 'llm_text_long',
  label: new TranslatableMarkup('LLM: Text'),
  field_rule: 'text_long',
  target: '',
)]
class LlmTextLong extends ComplexTextChat implements AiAutomatorTypeInterface {

  /**
   * {@inheritDoc}
   */
  public $title = 'LLM: Text';

  /**
   * {@inheritDoc}
   */
  public function extraAdvancedFormFields(ContentEntityInterface $entity, FieldDefinitionInterface $fieldDefinition, FormStateInterface $formState, array $defaultValues = []) {
    $form = parent::extraAdvancedFormFields($entity, $fieldDefinition, $formState, $defaultValues);

    $form['automator_use_text_format'] = [
      '#type' => 'select',
      '#title' => $this->t('Use text format'),
      '#description' => $this->t('If you want to use a specific text format, select it here. Otherwise a text format will be used based on user rights. Always pick one for cron jobs since the cron job runs anonymous.'),
      '#options' => $this->getGeneralHelper()->getTextFormatsOptions(),
      '#default_value' => $defaultValues['automator_use_text_format'] ?? NULL,
    ];

    return $form;
  }

  /**
   * {@inheritDoc}
   */
  public function storeValues(ContentEntityInterface $entity, array $values, FieldDefinitionInterface $fieldDefinition, array $automatorConfig) {
    // Get text format.
    $textFormat = !empty($automatorConfig['use_text_format'])
      ? $automatorConfig['use_text_format']
      : $this->getGeneralHelper()->calculateTextFormat($fieldDefinition);

    // Then set the value.
    $cleanedValues = [];
    foreach ($values as $value) {
      $cleanedValues[] = [
        'value' => $value,
        'format' => $textFormat,
      ];
    }
    $entity->set($fieldDefinition->getName(), $cleanedValues);
  }

}
