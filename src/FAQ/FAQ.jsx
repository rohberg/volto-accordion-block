import React, { useState } from 'react';

import { Icon } from '@plone/volto/components';
import rightSVG from '@plone/volto/icons/right-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import AnimateHeight from 'react-animate-height';

import { Accordion, Grid, Divider, Header } from 'semantic-ui-react';

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(new Set());

  return data.faq_list?.faqs ? (
    <>
      <Divider section />
      {data.faq_list.faqs.map((id_qa) => (
        <Accordion key={id_qa} fluid exclusive={false}>
          <Accordion.Title
            index={id_qa}
            className="stretched row"
            active={activeIndex.has(id_qa)}
            onClick={() => {
              const newSet = new Set(activeIndex);
              activeIndex.has(id_qa) ? newSet.delete(id_qa) : newSet.add(id_qa);
              setActiveIndex(newSet);
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column width="1">
                  {activeIndex.has(id_qa) ? (
                    <Icon name={downSVG} size="20px" />
                  ) : (
                    <Icon name={rightSVG} size="20px" />
                  )}
                </Grid.Column>
                <Grid.Column width="11">
                  <Header as="h3">{data.faq_list.faqs_layout[id_qa][0]}</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Accordion.Title>
          <div>
            <Accordion.Content
              className="stretched row"
              active={activeIndex.has(id_qa)}
            >
              <Grid>
                <Grid.Row>
                  <Grid.Column width="1"></Grid.Column>
                  <Grid.Column width="11">
                    <div>
                      <AnimateHeight
                        key={id_qa}
                        duration={300}
                        height={activeIndex.has(id_qa) ? 'auto' : 0}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.faq_list.faqs_layout[id_qa][1].data,
                          }}
                        />
                      </AnimateHeight>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
          </div>
          <Divider section />
        </Accordion>
      ))}
    </>
  ) : (
    ''
  );
};

export default FAQ;
