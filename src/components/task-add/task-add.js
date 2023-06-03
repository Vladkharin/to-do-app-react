import {Component} from "react";

import './task-add.css'

class TaskAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    onValueChanges = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state.title)
        this.setState({
            title:''
        })
    }

    render() {
        const {title} = this.state
        return(
            <form 
            action="#" 
            className="work-area__form-add"
            onSubmit={this.onSubmit}
            >
                <input 
                className="input-add" 
                type="text"
                value={title}
                name='title'
                onChange={this.onValueChanges}
                />
                <button className="submit-add" type="submit">добавить задачу</button>
            </form>
        )
    }
}

export default TaskAdd