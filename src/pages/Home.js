import React, { Component } from 'react';
import 'assets/css/home.css';
import Meeting from 'components/Meeting';
import Reservation from 'components/Reservation';

import firebase from 'server/firebase';
import Calendar from 'components/Calendar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            elList: []            
        }
    }
    

    componentDidMount() {
        console.log("did mount");    
    }

    componentWillUnmount() {
        console.log("will un mount");
    }

    createElements(reservations){
        let elList = [];
        
        for(let i=0, reservation; reservation = reservations[i]; i++){
            let el = 
            <Meeting 
                beginTime={reservation.beginTime}
                endTime={reservation.endTime}
                participants={reservation.participants}
                subject={reservation.subject}
                key={i}
            />;

            elList.push(el);
        }
                
        this.setState({elList}, ()=>{            
        });
    }

    render() {        
        return (
            <div className="Home">
                <Reservation firebase={firebase}/>
                <Calendar/>                
            </div>
        );
    }

    
}

export default Home;