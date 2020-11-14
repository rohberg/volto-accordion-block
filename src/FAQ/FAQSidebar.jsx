import React from 'react';
import { FAQSchema } from './schema';
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';

const FAQSidebar = ({ data, block, onChangeBlock }) => {
  return (
    <InlineForm
      schema={FAQSchema}
      title={FAQSchema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
    />
  );
};

export default FAQSidebar;
