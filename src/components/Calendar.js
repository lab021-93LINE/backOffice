import React, { Component } from 'react'
import Day from 'components/Day';
import 'assets/css/calendar.css';
import firebase from 'server/firebase';

let dayEnum = ['일', '월', '화', '수', '목', '금', '토'];

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.currentWeek = [];
        this.conferenceList = [];

        this.state = {
            dayList : []
        }

        //최초 객체 제작
        this.setCurrentWeek();
        this.getMeetingData();
    }


    setCurrentWeek() {
        let current = new Date();
        let week = [];        

        //moment 식으로 변경
        for(let i=1; i<=7 ; i++){
            let first = current.getDate() - current.getDay() + i 
            let day = new Date(current.setDate(first)).toISOString().slice(0, 10);            
            
            let dayValue = new Date(day);
            let dayOfWeek = dayValue.getDay();           
            
            dayOfWeek = dayEnum[dayOfWeek];
            
            let temp = day.split('-');
            let dateObject ={
                year : temp[0],
                month : temp[1],
                day : temp[2],
                date : day,
                dayOfWeek : dayOfWeek
            }            
            week.push(dateObject)
        }        
        this.currentWeek = week;
        
    }
    
        
    getMeetingData() {
        let db = firebase.database();
        let reserveRef = db.ref('meetingRoom');
        
    
        reserveRef
            .orderByChild('date')
            .startAt(this.currentWeek[0].date)
            .endAt(this.currentWeek[6].date)
            .on('value',
                (snapshot) => {
                    let deepCopyModel = [];
                    //깊은 복사 모델 생성
                    for (let i = 0, day; day = this.currentWeek[i]; i++) {
                        day.conferenceList = [];
                        deepCopyModel.push(day);
                    }

                    if (snapshot.val()) {
                        console.log('snapshot.val(): ', snapshot.val());
                        let meetingList = Object.values(snapshot.val());

                        for (let i = 0; i < meetingList.length; i++) {
                            let meeting = meetingList[i];

                            for (let j = 0; j < deepCopyModel.length; j++) {
                                let day = deepCopyModel[j];
                                

                                if (day.date === meeting.date) {
                                    day.conferenceList.push(meeting);
                                }
                            }
                        }

                    }

                    this.createCalendarElements(deepCopyModel);
                }
            );
    }

    createCalendarElements(weekInfo){
        let dateEl = [];
        
        for(let i=0; i < weekInfo.length; i++){
            let day = weekInfo[i];

            
            let el = 
            <Day date={day.date} dayOfWeek={day.dayOfWeek} key={i} conferenceList={day.conferenceList}/>;
            dateEl.push(el);
        }        

        this.setState({dayList: dateEl}, console.log('Calender setState Function is Operated!'));        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps, nextState: ', nextProps, nextState);
        return true;
    }
    
    
    
    render() {        
        return (
            <div className="calendar-box">
                {this.state.dayList}
            </div>
        )
    }
}
