import React, { Component } from 'react'
import Day from 'components/Day';
import 'assets/css/calendar.css';
import firebase from 'server/firebase';

let dayEnum = ['일', '월', '화', '수', '목', '금', '토'];

export default class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentWeek : [],
            dayList : [],
            conferenceList : []
        }
    }

    setCurrentWeek() {
        let current = new Date();
        let week = [];        
        
        for(let i=1; i<=7 ; i++){
            let first = current.getDate() - current.getDay() + i 
            let day = new Date(current.setDate(first)).toISOString().slice(0, 10)
            let temp = day.split('-');
            let dateObject ={
                year : temp[0],
                month : temp[1],
                day : temp[2],
                date : day,
                dayOfWeek : dayEnum[i-1]
            }
            week.push(dateObject)
        }        
        this.setState({currentWeek: week}, ()=> {

            this.getMeetingData();
        });
    }

    getMeetingData(){
        let db = firebase.database();
        let reserveRef = db.ref('meetingRoom');
        let deepCopyModel = [];

        //깊은 복사 모델 생성
        for(let i=0, day; day = this.state.currentWeek[i]; i++){
            day.conferenceList = [];     
            deepCopyModel.push(day);
        }

        console.log(deepCopyModel);
        reserveRef
        .orderByChild('date')
        .startAt(this.state.currentWeek[0].date)
        .endAt(this.state.currentWeek[6].date)
        .on('child_added',
            (resolve) => {
                let data = resolve.val();
                let _date = data.date;                

                //데이터베이스에서 불러온 데이터의 날짜 값을 비교해서 삽입
                for(let i=0, day; day = deepCopyModel[i]; i++){        
                    if(day.date == _date){
                        day.conferenceList.push(data);
                    }   
                }
                
                this.setState({currentWeek: deepCopyModel}, ()=>{
                    this.createCalendarElements();
                });
            },
            (reject) => {
                console.log('reject: ', reject);
            }
        );    
    }
    
    

    createCalendarElements(){
        let dateEl = [];

        for(let i=0, day; day = this.state.currentWeek[i]; i++){
            console.log(day);
            let el = 
            <Day date={day.date} dayOfWeek={day.dayOfWeek} key={i} conferenceList={day.conferenceList}/>;
            dateEl.push(el);
        }        

        this.setState({dayList: dateEl})
    }

    
    componentDidMount(){
        this.setCurrentWeek();
    }
    
    render() {        
        return (
            <div className="calendar-box">
                {this.state.dayList}
            </div>
        )
    }
}
