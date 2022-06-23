import React, { Component } from 'react'

export default class CTodolist extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const newState = {
                    todos: json
                }

                this.setState(newState)
            })
            .catch(err => console.log(err))
    }

    render()
    {

        return (
        <div>CTodolist
            {this.state.todos.length}
        </div>
        )
    }
}
