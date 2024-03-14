import Card from './card';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import {Link} from 'react-router-dom';
import './Findque.css'
export default function FindQuestions() {

    const [question, SET_QUESTION] = useState([]);
    const [FILTER_WITH_TITLE, TITLE_FILTER] = useState('');
    const [FILTER_WITH_TAG, TAGE_FILTER] = useState('');
    const [FILTER_WITH_DATE, DATE_FILTER] = useState('');

    // Fetch questions from Firebase when component mounts
    useEffect(() => {
        const DATA_FETCHED = async () => {
            const Snapshot = await getDocs(collection(db, "QUESTION"));
            const Data = [];
            Snapshot.forEach((DOC) => {
                const data = DOC.data();
                Data.push({
                    id: DOC.id,
                    title: data.title,
                    Describeproblem: data.Describeproblem,
                    Tags: data.Tags,
                    Date: data.Date
                   
                });
            });
            SET_QUESTION(Data);
        }
        DATA_FETCHED();
    }, []);

    // Filter questions based on user input
    const FILTERED_QUESTIONS = question.filter((question) => {
        const formatted_Date = new Date(question.Date).toLocaleDateString();
        const formatted_Filter_Date = new Date(FILTER_WITH_DATE).toLocaleDateString();
      
        return (
          question.title.toLowerCase().includes(FILTER_WITH_TITLE.toLowerCase()) &&
          question.Tags.toLowerCase().includes(FILTER_WITH_TAG.toLowerCase()) &&
          (!FILTER_WITH_DATE || formatted_Date.startsWith(formatted_Filter_Date))
        );
      });
      

    // Remove question by its ID from local state
    const REMOVING_QUESTION_BY_ID = (id) => {
        const QUESTIONS_UPDATING = question.filter(question => question.id !== id);
        SET_QUESTION(QUESTIONS_UPDATING);
    }

    return (
        <div>
            <div>
                <center>
                    <br />
                    <h1>Find Questions</h1>
                    <input className='filt'
                        type="text"
                        placeholder="Filter by title"
                        onChange={e => TITLE_FILTER(e.target.value)}
                    />
                    <input
                        className='filt'
                        type="text"
                        placeholder="Filter by tag"
                        onChange={e => TAGE_FILTER(e.target.value)}
                    />
                    <input
                        className='filt'
                        type="date"
                        onChange={e => DATE_FILTER(e.target.value)}
                    />
                    
                    <button
                        className='filt deleteQues'
                        >
                        <Link to={'/addque'}>
                        <Link to={'/'}>
                        Add Question</Link>
                        </Link>
                    </button>
                </center>
            </div>

            {FILTERED_QUESTIONS.map(question => (
                <Card
                    id={question.id}
                    key={question.id}
                    title={question.title}
                    description={question.Describeproblem}
                    tags={question.Tags}
                    date={question.Date}
                />
               
            ))}
           

        </div>
    )
}