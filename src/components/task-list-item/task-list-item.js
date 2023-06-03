import { Component } from "react";

import './task-list-item.css'

class TaskListItem extends Component {

    render() {
        const {title, checkbox, onToggleProp, onDelete} = this.props
        let classNameCheckbox = "not-checked";
        let classNameLine = "line none";

        if (checkbox) {
            classNameCheckbox += ' checked'
            classNameLine = 'line'
        }

        return (
            <li className="work-area__wrapper-item">
                <button 
                data-toggle='checkbox'
                className={classNameCheckbox}
                onClick={onToggleProp}/>
                <label  className="items-title">{title}</label>
                <button 
                className="edit"
                data-toggle='edit'
                />
                <button 
                className="delete"
                onClick={onDelete}/>
                <div className={classNameLine}/> 
            </li>
        )
    }
}



export default TaskListItem