import React from "react";
import Name from "./Name";

export class Salam extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            i: 0,
            msg: "Salam!",
        };

        this.onClick = this.onClick.bind(this);
        this.greet = this.greet.bind(this);
    }

    componentDidMount()
    {
        // setInterval(() => {
        //     const newState = {
        //         i: ++(this.state.i),
        //         msg: "Salam!",
        //     }

        //     this.setState(newState);
        // }, 1000);
    }

    onClick(e)
    {
        console.log(e);
        e.preventDefault();

        // this.setState({
        //     i: ++(this.state.i),
        //     msg: "Salam!",
        // });

        this.setState(prevState => ({
            i: ++(prevState.i),
            msg: "Salam!",
        }));
    }

    greet(name)
    {
        alert(name);
    }

    render()
    {
        let status;
        const {msg, i} = this.state;

        if (i < 10) {
            status = <div>Poor Guy</div>
        }
        else {
            status = <div>VIP Guy</div>
        }

        return <h3 onClick={this.onClick}>{msg + " " + i}
        {status}
        <Name name="Bill Gates" cb={this.greet} />
        </h3>
    }
}
