import React from 'react';

import FAQ from './FAQ';

const View = ({ data }) => {
  return (
    <div className="block rohberg accordion">
      {console.debug('block data (view)', data)}
      <FAQ data={data} />
    </div>
  );
};

export default View;
