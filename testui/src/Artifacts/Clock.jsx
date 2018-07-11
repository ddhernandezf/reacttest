import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.Timer = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.Timer);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <span>{this.state.date.toLocaleTimeString()}</span>
        );
    }
}