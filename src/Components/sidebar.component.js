import React, { Component } from 'react';
import '../assets/sidebar.component.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sidebar-container">
                사이드 바
            </div>
         );
    }
}
 
export default Sidebar;