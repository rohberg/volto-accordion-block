import { v4 as uuid } from 'uuid';
import { emptyBlocksForm } from '@plone/volto/helpers';
import { map } from 'lodash';

const emptyPanel = () => {
  const id = uuid();
  return {
    '@type': '@accordionBlockPanel',
    title: '',
    blocks: {
      [id]: emptyBlocksForm(),
    },
    blocks_layout: {
      items: [id],
    },
  };
};

export const emptyAccordion = (count) => {
  const blocks = {};
  const items = [];
  for (let x = 0; x < count; x++) {
    const id = uuid();
    blocks[id] = emptyPanel();
    items.push(id);
  }

  return {
    blocks,
    blocks_layout: {
      items,
    },
  };
};

export const getPanels = (data) => {
  return (data?.blocks_layout?.items || []).map((id) => [
    id,
    data.blocks?.[id],
  ]);
};
