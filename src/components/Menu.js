import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url : props.url,
            label : props.label
         }
    }
    render() { 
        return ( <li><Link to={this.state.url}>{this.state.label}</Link></li> );
    }
}
 
export default Menu;

