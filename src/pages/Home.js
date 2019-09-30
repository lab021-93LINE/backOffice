import React, { Component } from 'react';
import 'assets/css/home.css';
import Meeting from 'components/Meeting';
import Reservation from 'components/Reservation';

import firebase from 'server/firebase';

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
        this.reservation();        
    }

    componentWillUnmount() {
        console.log("will un mount");
    }

    reservation() {
        let db = firebase.database();
        let reserveRef = db.ref('meetingRoom/');        
        reserveRef.on('value',
            (resolve) => {                
                console.log('resolve: ', resolve.val());
                this.setState({reservations : Object.values(resolve.val())}, ()=>{
                    this.createElements(this.state.reservations);
                });
            },
            (reject) => {
                console.log('reject: ', reject);
            }
        );    
    }


    createElements(reservations){
        let elList = [];
        
        for(let i=0, reservation; reservation = reservations[i]; i++){
            console.log('reservation: ', reservation);
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
                <div className="reservation-box">
                    {this.state.elList}                
                </div>
            </div>
        );
    }

    
}

export default Home;