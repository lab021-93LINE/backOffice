import React, { Component } from 'react';
import Sidebar from './sidebar.component';
import Content from './content.component';
import '../assets/root.component.css';

class Root extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="root-container">                
                <Sidebar></Sidebar>
                <Content></Content>
            </div>
         );
    }
}
 

export default Root;