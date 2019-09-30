import React from 'react';
import 'assets/css/home.css';
import Meeting from 'components/Meeting';
import firebase from 'server/firebase';

const Home = () => {
    reservation();
    return (     
        <div className='home'>             
            <Meeting/>
        </div>
     );
}

function reservation(){
    let db = firebase.database();
    let reserveRef = db.ref('meetingRoom/');
    
    reserveRef.once('value').then(
        (resolve) => {
            console.log('resolve: ', resolve.val());                
        },
        (reject) => {
            console.log('reject: ', reject);

        }
    );
}
 
export default Home;