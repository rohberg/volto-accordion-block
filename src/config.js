import accordionSVG from '@plone/volto/icons/list-arrows.svg';

import FAQBlockEdit from './FAQ/BlockEdit';
import FAQBlockView from './FAQ/BlockView';
import FAQListEditWidget from './FAQ/FAQListEditWidget';

export default function applyConfig(config) {
  config.blocks.blocksConfig.accordionblock = {
    id: 'accordionblock',
    title: 'Accordion',
    edit: FAQBlockEdit,
    view: FAQBlockView,
    icon: accordionSVG,
    group: 'common',
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.widgets.type.faqlist = FAQListEditWidget;

  return config;
}
