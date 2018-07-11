import React from 'react';
import Axios from 'axios';

export default class DataTable extends React.Component{
    constructor(){
        super();
        this.FilterModel = {
            Id: null,
            Name: '',
            Active: null
        };
        this.state = {
            data: [],
            hasError: null,
            erroMessage: null
        };
    }

    componentDidMount(){
        Axios.post(this.props.API, JSON.stringify(this.FilterModel)).then(
            (r)=>{
                var itsOk = (r.status === 200);
                
                this.setState({
                    data: itsOk === true ? JSON.parse(r.data) : null,
                    hasError: !itsOk,
                    erroMessage: null
                });
            },
            (e)=>{
                this.setState({
                    data: [],
                    hasError: true,
                    erroMessage: e
                });
            }
        );
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            {
                                this.props.Header.map((item)=><td key={item.text}>{item.show}</td>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hasError === false && this.state.data.length > 0
                            ? 
                                this.state.data.map((item)=>
                                    <tr key={item.Id}>
                                        <td>{item.Id}</td>
                                        <td>{item.Name}</td>
                                        <td> <input type="checkbox" defaultChecked={item.Active === '1'} disabled /></td>
                                    </tr>
                                ) 
                            :
                            <tr><td colSpan={this.props.Header.length}>no data found</td></tr> 
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}