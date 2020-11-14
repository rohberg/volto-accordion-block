/*
  const example_blockdata = {
    faq_list: {
      faqs: ['1001', '1002'],
      faqs_layout: {
        1001: ['my question', 'my answer'],
        1002: ['another question', 'another answer'],
      }
    }
  }
*/

export const QuestionAnswerPairSchema = (title_question, title_answer) => {
  return {
    title: 'Question and Answer Pair',
    fieldsets: [
      {
        id: 'default',
        title: 'QA pair',
        fields: ['question', 'answer'],
      },
    ],
    properties: {
      question: {
        title: title_question,
        type: 'string',
        widget: 'textarea',
      },
      answer: {
        title: title_answer,
        type: 'string',
        widget: 'richtext',
      },
    },
    required: ['question', 'answer'],
}};

export const FAQSchema = {
  title: 'FAQ',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['faq_list'],
    },
  ],
  properties: {
    faq_list: {
      title: 'Question and Answers',
      type: 'faqlist',
    },
  },
  required: [],
};
