import './App.css';
import React, { useState } from 'react';
import { taskArray } from './taskArray';
import Header from './Components/Header';
import Form from './Components/Form';
import Task from './Components/Task';
import Footer from './Components/Footer';


export default function App() {

  const [tasks, setTasks] = useState( taskArray )
  const [showForm, setShowForm] = useState(false)

  function showTask() {
    setShowForm(!showForm);  
  }
 
  function deleteTask(id) {
    setTasks(tasks.filter(prevTask => prevTask.id !== id));  
  }

  function addTask(task) {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  function toggleReminder(id) {
    alert('Reminder has been set')
    // setTasks(
    // tasks.map(task => task.id === id) ? {
    //   ...tasks, reminder: !tasks.reminder} : tasks 
    // );  
  }


  return (
    <div className='App'>
      <Header 
        title='Task Tracker'
        onAdd={showTask}
        showme={showForm}
      />
      {showForm && <Form onAdd= {addTask}/>}
      <div>
        {tasks.map(task => {
        const {id, text, date, reminder}= task;
         return (
          <Task
            key={id}
            id={id}
            text={text}
            date={date}
            reminder={reminder}
            handleClick={deleteTask}
            toggleReminder= {toggleReminder}
          />
        )})}
      </div>
      <Footer />
    </div>
  );
}
