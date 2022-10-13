import React from "react";
import { useState } from "react";


export default function MyForm({onAdd}) {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        if (!date) {
            alert('Please add a date')
            return
        }
        
        onAdd({text, date, reminder})

        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='my-form' onSubmit={onSubmit}>
            <label htmlFor="Task">Task</label>
            <input
                type="text"
                placeholder="Add Task"
                value={text} 
                onChange={(e) => setText(e.target.value)}
                className='form-inputs' 
            />
            <label htmlFor="Date">Day & Time</label>
            <input
                type="text"
                placeholder="Add Day & Time"
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                className='form-inputs'
            />
            <div className="check-box">
            <h4 className="">Set Reminder</h4>
            <input type="checkbox"
                className="reminder-box" 
                checked={reminder} 
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
            </div>

            <input type="submit" value="Save Task" className='form-button'/>
            
         </form>
      
    )
}