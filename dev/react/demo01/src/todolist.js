import React, { useRef } from 'react';

export class TodoList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.todoRef = React.createRef();

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.checkItem = this.checkItem.bind(this);

        console.log("constructor()");
        
        this.state = {
            items: [],
        }
    }

    handleAddTodo(e)
    {
        e.preventDefault();
        let todo = this.todoRef.current.value;
        this.todoRef.current.value = "";
        this.todoRef.current.focus();
        console.log(todo);

        let nextid = this.state.items.length + 1;
        let nextItem = {
            id: nextid,
            name: todo,
            complete: false,
        }

        let items = this.state.items.slice();
        items.push(nextItem);

        this.setState({items});
    }

    checkItem(e)
    {
        console.log(e);
    }

    render()
    {
        let items = this.state.items.map( item => (
            <div key={item.id}>
            <label>
                <input type="checkbox" checked={item.complete} onChange={this.checkItem}></input>
                {item.name}
            </label>
            </div>
            )
        );

      return (
        <div>
            <div className="form-group m-3 col-3">
                <label>Todo:</label>
                <input ref={this.todoRef} type="text" className="form-control mt-1" name="todo"  />

                <button onClick={this.handleAddTodo} className="btn btn-primary m-3">Add</button>
                <button className="btn btn-primary m-3">Clear Completed</button>

                <div>0 left</div>
                <div>total: {this.state.items.length}</div>
                <h3>Items:</h3>
                    { items }
            </div>
        </div>
      );
    }

}
