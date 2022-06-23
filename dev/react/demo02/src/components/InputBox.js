import React from 'react'

class InputBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.inputRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev)
    {
        // console.log(ev);
        ev.preventDefault();

        console.log(this.inputRef.current.value);
    }

    render()
    {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.handleClick}>OK</button>
            </div>
        )
    }
}

export default InputBox
