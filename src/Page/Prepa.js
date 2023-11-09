import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useQuiz } from '../hooks/useQuiz'
import Quiz from '../components/Quiz';
import "./Prepa.css"

const Prepa = () => {
  const [id, setId] = useState(1);
  const [quiz, loading]=useQuiz();
  return (
    <>
        <Navbar></Navbar>
        <div className="App App-wrapper">
      {loading ? (
        <span>Loading...</span>
      ) : (
    <Quiz key={id} restart={() => setId(id + 1)} {...quiz}/>
      )}
    </div>
    </>
  )
}

export default Prepa
