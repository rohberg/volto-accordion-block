import React, { useState } from 'react';

import { Icon } from '@plone/volto/components';
import rightSVG from '@plone/volto/icons/right-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import AnimateHeight from 'react-animate-height';
import './accordion.less';

import { Accordion, Grid, Divider, Header } from 'semantic-ui-react';

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(new Set());

  return data.faq_list?.faqs ? (
    <>
      {data.faq_list.faqs.map((id_qa) => (
        <Accordion key={id_qa} fluid exclusive={false}>
          <Accordion.Title
            index={id_qa}
            className=""
            active={activeIndex.has(id_qa)}
            onClick={() => {
              const newSet = new Set(activeIndex);
              activeIndex.has(id_qa) ? newSet.delete(id_qa) : newSet.add(id_qa);
              setActiveIndex(newSet);
            }}
          >
            {activeIndex.has(id_qa) ? (
              <Icon name={downSVG} size="20px" />
            ) : (
              <Icon name={rightSVG} size="20px" />
            )}
            {data.faq_list.faqs_layout[id_qa][0]}
          </Accordion.Title>
          <Accordion.Content active={activeIndex.has(id_qa)}>
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
          </Accordion.Content>
        </Accordion>
      ))}
    </>
  ) : (
    ''
  );
};

export default FAQ;
