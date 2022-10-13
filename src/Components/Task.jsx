import React from "react";


export default function Task({text, id, date, handleClick, toggleReminder}) {

    return (
        <div className="task" onDoubleClick={() => toggleReminder(id)}>
            <h3 className="task-app">{text} 
            <i className="fa fa-close" onClick={() => handleClick(id)}/></h3>
            <p>{date}</p>
        </div>
    )
}