import icon from '@plone/volto/icons/list-bullet.svg';

import FAQBlockEdit from './FAQ/BlockEdit';
import FAQBlockView from './FAQ/BlockView';
import FAQListEditWidget from './FAQ/FAQListEditWidget';

export default function applyConfig(config) {
  config.blocks.blocksConfig.faq_viewer = {
    id: 'faq_viewer',
    title: 'FAQ',
    edit: FAQBlockEdit,
    view: FAQBlockView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.widgets.type.faqlist = FAQListEditWidget;

  return config;
}
