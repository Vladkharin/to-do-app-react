import { Component } from "react";

import './task-edit.css'

class TaskEdit extends Component{
    render() {
        
        const {edit, title} = this.props
        let className = "work-area__form-edit"

        if (!edit) {
            className += ' none'
        }

        return(
            <form action="#" className={className} value={title}>
                <input className="input-edit" type="text"/>
                <button className="submit-edit" type="submit">
                    редактировать задачу
                </button>
            </form>
        )
    }
}

export default TaskEdit