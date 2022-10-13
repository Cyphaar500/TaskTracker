import React from "react";
import Button from "./Button";


export default function Header({title, onAdd, showme}) {
    
    return (
        <div className="Header">
            <h1 className="h-title">{title}</h1>
            <Button 
            click={onAdd} 
            color={showme ? 'black': 'white'} 
            backgroundColor={showme ? 'red': 'green'} 
            text={showme ? 'Close': 'Add'}
            />
        </div>
    )
}