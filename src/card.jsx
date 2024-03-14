import React, { useState } from 'react';
import './card.css';
import { db } from './firebase'; // Import your Firebase configuration file
import { deleteDoc, doc } from 'firebase/firestore'; // Import Firestore deleteDoc and doc

function QuestionCard({ id, title, description, tags, date }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = async () => {
    try {
      // Use await to delete the document from Firestore
      await deleteDoc(doc(db, 'QUESTION', id)); // Replace 'yourCollectionName' with the actual collection name
      console.log('Document successfully deleted!');
      alert("QUESTION deleted successfully")
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <div
      className={`c1 ${isExpanded ? 'expanded' : ''}`}
      onClick={handleExpand}
    >
      <div className='c1'>
        <h3>{title}</h3>
        {isExpanded && <p>{description}</p>}
        <p>Tags: {tags}</p>
        <p>Date: {date}</p>
        <button onClick={handleDelete}>Delete</button> {/* Add the delete button */}
      </div>
    </div>
  );
}

export default QuestionCard;

