import { Component } from "react";

import './app.css'
import TaskList from "../task-list/task-list";
import TaskAdd from "../task-add/task-add";
import TaskEdit from "../task-add/task-edit/task-edit";

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {title: 'Vlad', id: 1, checkbox: false, edit: false},
                {title: 'Sveta', id: 2, checkbox: false, edit: false},
                {title: 'Danil', id: 3, checkbox: false, edit: false}
            ], 
            edit: false
        }

        this.maxId = 4
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    onDelete = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    createItem = (title) => {
        const newItem = {
            title,
            id: this.maxId++,
            checkbox: false,
            edit: false
        }

        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    render() {
        const {data} = this.state
        return (
            <div className='app'>
                <header>
                    <a href="1">
                        <h1>To-Do-App</h1>
                    </a>
                </header>
                <TaskList 
                data={data}
                onToggleProp={this.onToggleProp}
                onCreate={this.createItem}
                onDelete={this.onDelete}
                />

                <TaskEdit
                data={data}
                />

                <TaskAdd
                data={data}
                onCreate={this.createItem}/>

                
            </div>
        )
    }
}


export default App