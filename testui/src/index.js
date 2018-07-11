import './style/layout.css';

import React from 'react';
import ReactDom from 'react-dom';

// import DataTable from './Artifacts/DataTable.jsx';
// import Button from './Artifacts/Button.jsx';
// import Clock from './Artifacts/Clock.jsx';

import Main from './Views/Main.jsx';

// function btnOne(){
//     alert('This is button one');
// }

// function btnTwo(){
//     alert('This is button two');
// }

// var headers = [{text: 'Id', show:'ID'},{text: 'Name', show:'NAME'},{text: 'Active', show:'ACTIVE'} ];

// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Clock />
//                 <Button Text="Button One" Func={btnOne}/>
//                 <br />
//                 <Button Text="Button Two" Func={btnTwo}/>
//                 <br /><br /><br />
//                 <div>This is a table</div><br/>
//                 <DataTable Header={headers} API="http://localhost:8090/Test/Services/Role" />
//             </div>
//         );
//     }
// }

ReactDom.render(
    <Main />,
    document.getElementById('root')
);