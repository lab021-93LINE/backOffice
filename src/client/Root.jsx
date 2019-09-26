import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import 'assets/css/page.css';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <BrowserRouter>
                <App/>
            </BrowserRouter>
         );
    }
}
 
export default Root;