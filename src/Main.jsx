import React, { useState } from 'react';
import Page1 from './Selector';
import Form2 from './QueForm';
import Form1 from './form';

function POSTINGPAGE() {
  const [Typeofpost, type] = useState('QUESTIONS');
  return (
    <div>
      <Page1 postType={type} setPostType={type} />
      {Typeofpost === 'QUESTIONS' ? <Form2 /> : null}
      {Typeofpost === 'ARTICLE' ? <Form1 /> : null}
    </div>
  );
}

export default POSTINGPAGE;
