import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Button, List, Ref } from 'semantic-ui-react';
import cx from 'classnames';
import { isEmpty } from 'lodash';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

import { Icon } from '@plone/volto/components';

import addSVG from '@plone/volto/icons/add.svg';
import clearSVG from '@plone/volto/icons/clear.svg';
import configSVG from '@plone/volto/icons/configuration.svg';

import { getPanels, emptyAccordion } from './utils';

const addNewAccordionPanel = () => {
  console.debug('addNewAccordionPanel');
};

const Edit = (props) => {
  const { block, data, onChangeBlock, selected } = props;
  console.debug('data', data);
  const intl = useIntl();
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const [droppableId, setDroppableId] = useState(uuid());

  const panelData = isEmpty(data?.data?.blocks)
    ? emptyAccordion(3)
    : data?.data;
  console.debug('panelData', panelData);
  const panels = getPanels(panelData); // list of [id, panel block]
  console.debug('panels', panels);

  const onDragEnd = (result) => {
    console.debug('onDragEnd result', result);
  };
  const onSelectPanel = (block) => {
    console.debug('onSelectPanel block', block);
  };
  const onChangeSelectedPanel = (index) => {
    console.debug('onChangeSelectedPanel index', index);
  };
  const removePanel = (e, index) => {
    console.debug('removePanel e, index', e, index);
  };


  React.useEffect(() => {
    if (isEmpty(data?.data?.blocks)) {
      onChangeBlock(block, {
        '@type': 'accordionblock',
        data: panelData,
      });
    }
    /* eslint-disable-next-line */
  }, []);

  return (
    <>
      {selected && (
        <div className="toolbar">
          <Button.Group>
            <Button
              aria-label={`Add accordion panel`}
              icon
              basic
              onClick={(e) => addNewAccordionPanel(e)}
            >
              <Icon name={addSVG} size="24px" />
            </Button>
          </Button.Group>
          <Button.Group>
            <Button
              aria-label={`Select accordion block`}
              icon
              basic
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPanelIndex(null);
                // this.node.current.focus();
              }}
            >
              <Icon name={configSVG} size="24px" />
            </Button>
          </Button.Group>
        </div>
      )}
      <div className={'block rohberg accordion'}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={droppableId} direction="horizontal">
            {(provided) => (
              <Ref innerRef={provided.innerRef}>
                <List relaxed {...provided.droppableProps}>
                  {panels &&
                    panels.map(([panelId, panel], index) => (
                      <Draggable
                        draggableId={panelId}
                        index={index}
                        key={panelId}
                      >
                        {(provided) => {
                          return (
                            <Ref innerRef={provided.innerRef}>
                              <List.Item
                                className="accordionblockpanel"
                                key={panelId}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className={cx('renderer-wrapper', {
                                    selected:
                                      selected && selectedPanelIndex === index,
                                  })}
                                  role="presentation"
                                  // This prevents propagation of ENTER
                                  onKeyDown={(e) => e.stopPropagation()}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectPanel(panelId);
                                    onChangeSelectedPanel(index);
                                  }}
                                >
                                  <Button
                                    aria-label={`Remove accordion panel ${index}`}
                                    basic
                                    icon
                                    onClick={(e) => removePanel(e, index)}
                                    className="remove-block-button"
                                  >
                                    <Icon
                                      name={clearSVG}
                                      className="circled"
                                      size="24px"
                                    />
                                  </Button>
                                  <div>Panel id: {panelId}</div>
                                </div>
                              </List.Item>
                            </Ref>
                          );
                        }}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </List>
              </Ref>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default Edit;
