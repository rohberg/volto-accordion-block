import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { v4 as uuid } from 'uuid';
import { omit, without } from 'lodash';
import move from 'lodash-move';
import { Icon, FormFieldWrapper } from '@plone/volto/components';
import { Form as VoltoForm } from '@plone/volto/components';
import { DragDropList } from '@eeacms/volto-blocks-form/components';

import dragSVG from '@plone/volto/icons/drag.svg';
import trashSVG from '@plone/volto/icons/delete.svg';
import plusSVG from '@plone/volto/icons/circle-plus.svg';

import { QuestionAnswerPairSchema } from './schema.js';

const messages = defineMessages({
  question: {
    id: 'Question',
    defaultMessage: 'Question',
  },
  answer: {
    id: 'Answer',
    defaultMessage: 'Answer',
  },
  add: {
    id: 'add',
    defaultMessage: 'add',
  },
});

export function moveQuestionAnswerPair(formData, source, destination) {
  return {
    ...formData,
    faqs: move(formData.faqs, source, destination)
  };
}

const empty = () => {
  return [uuid(), ['', {}]];
};

const FAQListEditWidget = (props) => {
  const { value = {}, id, onChange } = props;
  // id is the field name: faq_list
  // value is the form data (see example in schema.js)

  const onSubmitQAPair = (id_qa, question, answer) => {
    onChange(id, {
      ...value,
      faqs_layout: {
        ...(value.faqs_layout || {}),
        [id_qa]: [question, answer],
      },
    });
  };

  const addQA = () => {
    const [newId, newData] = empty();
    onChange(id, {
      ...value,
      faqs: [...(value.faqs || []), newId],
      faqs_layout: {
        ...(value.faqs_layout || {}),
        [newId]: newData,
      },
    });
  };

  // qaList array of [id_question, [question, answer]]
  const qaList = (value.faqs || []).map((key) => [key, value.faqs_layout[key]]);

  const showAdd = true;
  return (
    <FormFieldWrapper
      {...props}
      draggable={false}
      columns={1}
      className="drag-drop-list-widget"
    >
      <div className="columns-area">
        <DragDropList
          childList={qaList}
          onMoveItem={(result) => {
            const { source, destination } = result;
            if (!destination) {
              return;
            }
            const newFormData = moveQuestionAnswerPair(
              value,
              source.index,
              destination.index,
            );
            onChange(id, newFormData);
            return true;
          }}
        >
          {(dragProps) => {
            const { childId, draginfo } = dragProps;
            return (
              <div ref={draginfo.innerRef} {...draginfo.draggableProps}>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      visibility: 'visible',
                      display: 'inline-block',
                    }}
                    {...draginfo.dragHandleProps}
                    className="drag handle wrapper"
                  >
                    <Icon name={dragSVG} size="18px" />
                  </div>
                  <div className="column-area">
                    <VoltoForm
                      onSubmit={({ question, answer }) => {
                        onSubmitQAPair(childId, question, answer);
                      }}
                      formData={{
                        question: value.faqs_layout[childId][0],
                        answer: value.faqs_layout[childId][1],
                      }}
                      schema={QuestionAnswerPairSchema(
                        props.intl.formatMessage(messages.question),
                        props.intl.formatMessage(messages.answer),
                      )}
                    />
                    {qaList?.length > 1 ? (
                      <button
                        onClick={() => {
                          onChange(id, {
                            faqs: without(value.faqs, childId),
                            faqs_layout: omit(value.faqs_layout, [childId]),
                          });
                        }}
                      >
                        <Icon name={trashSVG} size="18px" />
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        </DragDropList>
        {showAdd ? (
          <button
            aria-label={props.intl.formatMessage(messages.add)}
            onClick={addQA}
          >
            <Icon name={plusSVG} size="18px" />
          </button>
        ) : (
          ''
        )}
      </div>
    </FormFieldWrapper>
  );
};

export default injectIntl(FAQListEditWidget);
