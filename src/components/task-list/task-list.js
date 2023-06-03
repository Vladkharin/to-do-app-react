
import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css'


function TaskList({data, onToggleProp, onDelete}) {

    let elements = data.map(item => {
        return(
            <TaskListItem
                key={item.id}
                title={item.title}
                checkbox={item.checkbox}
                edit={item.edit}
                onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                onDelete={() => onDelete(item.id)}/>
        );
    });

    return(
        <div className="work-area__wrapper">
                <h2>Задачи</h2>
                <ul className="work-area__wrapper-items">
                    {elements}
                </ul>
            </div>
    );
}

export default TaskList