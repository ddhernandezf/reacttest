import React from 'react';

export default class Button extends React.Component{
    Click = ()=>{
        this.props.Func();
    }

    render(){
        return (
            <button onClick={this.Click}>{this.props.Text}</button>
        );
    }
}