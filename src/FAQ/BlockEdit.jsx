import React from 'react';
import { SidebarPortal } from '@plone/volto/components';

import { List } from 'semantic-ui-react';

import FAQSidebar from './FAQSidebar';
import FAQ from './FAQ';

const Edit = ({ data, onChangeBlock, block, selected }) => {
  return (
    <div className={'block faq'}>
      {/* <List
        items={Object.entries(data).map(
          ([key, value]) => key + ': ' + JSON.stringify(value),
        )}
      /> */}
      <SidebarPortal selected={selected}>
        <FAQSidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>

      <FAQ data={data} />
    </div>
  );
};

export default Edit;
