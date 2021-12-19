import './quiz.css';
import React from "react";
import QuizTitle from '../quizTitle/QuizTitle';
import Q1Title from '../q1Title/Q1Title';
import Q1Input from '../q1Input/Q1Input';
import Q2Title from '../q2Title/Q2Title';
import Q2Input from '../q2Input/Q2Input';


function Quiz() {
  return (
      <div className='quiz'>
          <QuizTitle/>
          <Q1Title/>
          <Q1Input/>
          <Q2Title/>
          <Q2Input/>
      </div>
  )
}

export default Quiz;