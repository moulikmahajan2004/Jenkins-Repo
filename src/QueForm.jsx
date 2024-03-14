import { useState } from 'react';
import './QueForm.css';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function QueForm()
{
  
  const [values, setValues] = useState({
    title: "",
    Describeproblem:"",
    Tags: "", 
    Date:"",
  });
  //JUMPING FROM ONE PAGE TO ANOTHER PAGE

//QUESTION POSTING
  const post = async (e) => 
  {
    try {
      const docRef = await addDoc(collection(db, "QUESTION"), {
        title: values.title,
        Describeproblem:values.Describeproblem,
        Tags:values.Tags, 
        Date:Date(),
      });
       console.log("Document written with ID: ", docRef.id);
       alert("ARTICLE SUCCESSFULLY UPLOADED");
      }  
       catch (e) {
       console.error("Error adding document: ", e);
    }
  }
  const navigate = useNavigate();
  function jump()
{
 
  navigate('/FindQue');
}
  
  return (
    <div className='cont'>
    <div className="QUESTIONS">
    
          <div className='class1'>
          <p className='text1'>WHAT DO YOU WANT TO ASK OR SHARE</p>
          </div>
  
          <span className='TITLE'>
            Title
            <input className='text2' type='text' placeholder='START YOUR QUESTION WITH, WHEN , WHY ?' onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value}))}/>
          </span>

          <h3 className='text3'>DESCRIBE YOUR PROBLEM</h3>

          <input className='text4' type='text' placeholder='ADD PROBLEM DESCRIPTION'  onChange={(event) =>
              setValues((prev) => ({ ...prev, Describeproblem: event.target.value}))}/>

          <div>
          <span className='Tags'>
            TAGS
            <input className='Bt' type='text' placeholder='PLEASE ADD MINIMUM THREE TAGS' onChange={(event) =>
              setValues((prev) => ({ ...prev, Tags: event.target.value}))}/>
          </span>
          </div>
          <button className ='B1'onClick={jump}>FindQue</button>
          <button className='B1' onClick={post} >POST</button>
        </div>
    </div>
  );
}

export default QueForm;