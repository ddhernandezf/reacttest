import React from 'react';
import Logo from '../Images/React.png';
import MenuButton from '../Artifacts/MenuButton';
import Clock from '../Artifacts/Clock';
import DataTable from '../Artifacts/DataTable'

function callItem(item){
    alert('called from  ' + item);
}

var headers = [{text: 'Id', show:'ID'},{text: 'Name', show:'NAME'},{text: 'Active', show:'ACTIVE'} ]

export default class Main extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <header>
                    <div className="info">
                        <div className="system">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="name">
                                <span>REACT TEST</span>
                            </div>
                        </div>
                        <div className="user">
                            <span>Hi, Douglas</span>
                            <span>Admin</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    <div className="menu">
                        <MenuButton Text="Option One" Func={callItem} />
                        <MenuButton Text="Option Two" Func={callItem} />
                        <MenuButton Text="Option Three" Func={callItem} />
                    </div>
                </header>
                <div className="body">
                    <div className="wrapper">
                    <DataTable Header={headers} API="http://localhost:3000/Role" />
                    </div>
                </div>
                <footer>Developed by &nbsp;<strong>®MITI</strong> &nbsp; <Clock/></footer>
            </div>
        );
    }
}