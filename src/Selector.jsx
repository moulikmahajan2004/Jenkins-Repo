import React from 'react';
import './selector.css'
function SelectorofType({ Typeofpost, setPostType }) {
  return (
    <div>
      <h2 className='newpost'> NEW POST </h2>
      <label >POST TYPE: </label>
      <label>
        <input className='QUESTIONS'
          type="radio"
          value="QUESTIONS"
          checked={Typeofpost === 'QUESTIONS'}
          onChange={() => setPostType('QUESTIONS')}
        />
        Question
      </label>

      <label>
        <input className='QUESTIONS'
          type="radio"
          value="ARTICLE"
          checked={Typeofpost === 'ARTICLE'}
          onChange={() => setPostType('ARTICLE')}
        
        />
        Article
      </label>
    </div>
  );
}

export default SelectorofType;
