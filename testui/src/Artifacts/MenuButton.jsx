import React from 'react';

export default class MenuButton extends React.Component{
    Click = ()=>{
        this.props.Func(this.props.Text);
    }

    render(){
        return (
            <div className="item" onClick={this.Click}>{this.props.Text}</div>
        );
    }
}