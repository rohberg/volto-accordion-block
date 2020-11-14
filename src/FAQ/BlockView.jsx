import React from 'react';

import { List } from 'semantic-ui-react';

import FAQ from './FAQ';

const View = ({ data }) => {
  return (
    <div className="block faq">
      {/* <List
        items={Object.entries(data).map(
          ([key, value]) => key + ': ' + JSON.stringify(value),
        )}
      /> */}
      <FAQ data={data} />
    </div>
  );
};

export default View;
