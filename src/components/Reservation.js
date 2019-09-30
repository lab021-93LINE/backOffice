import React, { Component } from 'react';


class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            beginTime : null,
            endTime : null,
            participants : null,
            subject : null
        }
        this.db = this.props.firebase.database();
        this.reserveRef = this.db.ref('meetingRoom/');        
    }
    
    inputHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    reserve(){        
        this.reserveRef.push(this.state);
        this.setState({ 
            beginTime : null,
            endTime : null,
            participants : null,
            subject : null
        }, ()=>{console.log(this.state)});
    }

    render() { 
        return (  
            <div className="add-reservation">
                <form>
                    <input type="text" className="reservation-field" name="beginTime" value={this.state.beginTime} placeholder="beginTime" onChange={this.inputHandler}></input>
                    <input type="text" className="reservation-field" name="endTime" value={this.state.endTime} placeholder="endTime" onChange={this.inputHandler}></input>
                    <input type="text" className="reservation-field" name="participants" value={this.state.participants} placeholder="participants" onChange={this.inputHandler}></input>
                    <input type="text" className="reservation-field" name="subject" value={this.state.subject} placeholder="subject" onChange={this.inputHandler}></input>
                </form>
                <button onClick={() => this.reserve()}>회의 추가</button>
            </div>
        );
    }
}
 
export default Reservation;