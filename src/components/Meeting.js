import React, { Component } from 'react';
import 'assets/css/meeting.css'
class Meeting extends Component {
    constructor(props) {
        super(props);        
        this.state = {             
        }
    }

    render() {         

        return ( 
            <div className="meeting" key='1'>                
                <p className="subject" key='subject'>{this.props.subject}</p>
                <p className="participants" key='participants'>{this.props.participants}</p>
                <div className="time-box" key='2'>
                    <span className="begin-time" key='begin-time'>{this.props.beginTime}</span>
                    <span className="end-time" key='end-time'>{this.props.endTime}</span>
                </div>                
            </div>
         );
    } 
}
 
export default Meeting;