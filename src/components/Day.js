import React, { Component } from 'react'
import * as moment from 'moment';
import { Button } from 'antd';

let today = new moment();
export default class Day extends Component {
    constructor(props) {
        super(props)                
        this.state = this.stateUpdate(this.props);
    }
    
    stateUpdate(props){
        let date = props.date.split('-');
        let state = {
            year : date[0],
            month : date[1],
            day : date[2],
            dayOfWeek: props.dayOfWeek,
            conferenceList : props.conferenceList,
            isToday : moment().isSame(moment(date, 'YYYY-MM-DD'), 'days'),
            cardList: this.createMeetingCardElement(props, 'NORMAL')
        }
        
    
        return state;
    }
    
    componentWillReceiveProps(nextProps){
        
        this.setState(this.stateUpdate(nextProps));
    }

    

    updateHandler(){

    }

    cancelHandler(){

    }

    createMeetingCardElement(props, status){
        let elList = [];
        
        for(let i=0; i < props.conferenceList.length; i++){
            let conference = props.conferenceList[i];            
            let el =      
                <Card                  
                date = {conference.date} 
                subject = {conference.subject} 
                beginTime = {conference.beginTime} 
                endTime = {conference.endTime} 
                participants = {conference.participants}
                key = {i} 
                updateState = {false}
                onClick = {() => this.cardClickHandler(conference, i)}
                />                 

            elList.push(el);
        }

        return elList;          
    }

    render() {
        return (
            <div className="day-column" >
                <p className={`date-text-title ${this.state.isToday? 'is-today' : ''}`}>
                    <span className="day-of-week">{this.state.dayOfWeek} </span>
                    <span className="date">{this.state.day}</span>
                </p>

                <div className="meeting-box">
                    {this.state.cardList}
                </div>                            
            </div>
        )
    }
}

class Card extends Component {
    constructor(props){
        super(props);
        
    }
    cardClickHandler(conference){
        console.log(`conference `, conference);
    }    

    render() {
        return (
            <div className={`card-box ${this.props.updateState? 'update': ''}`}  onClick={() => {this.cardClickHandler(this.props)}}>
                <p className="subject" key='subject'>{this.props.subject}</p>
                <p className="participants" key='participants'>{this.props.participants}</p>
                <div className="time-box" key='2'>
                    <span className="begin-time" key='begin-time'>
                        <i aria-label="icon: clock-circle" 
                        className="anticon anticon-clock-circle ant-time-picker-clock-icon">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="clock-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg></i>
                        {this.props.beginTime}</span> ~ 
                    <span className="end-time" key='end-time'> {this.props.endTime}</span>
                </div>         
            </div>
        )
    }
}



class UpdateCard extends Component {
    render() {
        return (
            <div>
                <div className="card-box">
                    <p className="subject" key='subject'>{this.props.subject}</p>
                    <p className="participants" key='participants'>{this.props.participants}</p>
                    <div className="time-box" key='2'>
                        <span className="begin-time" key='begin-time'>
                            <i aria-label="icon: clock-circle" className="anticon anticon-clock-circle ant-time-picker-clock-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="clock-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg></i>
                            {this.props.beginTime}</span> ~ 
                        <span className="end-time" key='end-time'> {this.props.endTime}</span>
                    </div>         
                    <div className="button-box">
                        <Button type="primary" onclick={this.props.updateHandler}>Update</Button>
                        <Button type="primary" onclick={this.props.cancelHandler}>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
}


