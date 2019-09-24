import React, { Component } from 'react';
import '../assets/content.component.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="content-container">
                컨텐트
            </div>
         );
    }
}
 
export default Content;