import React, { Component } from 'react';
import firebase from 'server/firebase';

class Meeting extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firebase
         }
    }

    
    
    

    render() {         

        return ( 
            <div className="meeting" key='1'>
                <p className="subject" key='subject'></p>
                <p className="participants" key='participants'></p>
                <div className="time-box" key='2'>
                    <span className="begin-time" key='begin-time'></span>
                    <span className="end-time" key='end-time'></span>
                </div>                
            </div>
         );
    } 
}
 
export default Meeting;