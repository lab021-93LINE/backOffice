import React, { Component } from 'react';
import locale from 'antd/es/date-picker/locale/ko_KR';
import 'assets/lib/antd.min.css';
import { DatePicker, TimePicker, Select } from 'antd';
const { Option } = Select;

const format='HH:mm';
const workerList = ['대표님', '윤호님', '성필님', '병혁님', '용현님', '은지님', '석민님', '현정님', '종식님', '민아님'];
const workerOptions = [];
for(let i=0, worker; worker = workerList[i]; i++){
    workerOptions.push(<Option key={worker}>{worker}</Option>);
}
class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date : '',
            beginTime : '',
            endTime : '',
            participants : '',
            subject : ''
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
            date : '',
            beginTime : '',
            endTime: '',
            participants : '',
            subject : ''
        }, ()=>{});
    }

    createMonthTooltip(){
        let dayOfMonth = new Date().getDate();
        console.log(dayOfMonth);
    }

    componentDidMount(){
        this.createMonthTooltip()
    }

    datePickerHandler = (momentDate, dateString) => {        
        this.setState({date: dateString});
    }
    beginTimePickerHandler = (momentDate, dateString) => {
        this.setState({beginTime: dateString})
    }
    endTimePickerHandler = (momentDate, dateString) => {
        this.setState({endTime: dateString})
    }
    participantsHandler = (values, objects) =>{        
        this.setState({participants: values})
    }
    render() { 
        return (  
            <div className="add-reservation">
                <form>            
                    <DatePicker 
                        locale={locale}
                        onChange={this.datePickerHandler}
                    />
                    <TimePicker
                     className = "beginTime"
                     format = {format}
                     minuteStep = {10}
                     onChange={this.beginTimePickerHandler}
                    />
                    <TimePicker
                     className = "endTime"
                     format = {format}
                     minuteStep = {10}
                     onChange={this.endTimePickerHandler}
                    />
                    <Select
                        mode="multiple"
                        onChange={this.participantsHandler}>
                        {workerOptions}                        
                    </Select>
                        
                    <input type="text" className="reservation-field" name="subject" value={this.state.subject} placeholder="subject" onChange={this.inputHandler}></input>
                    
                </form>
                <button onClick={() => this.reserve()}>회의 추가</button>
            </div>
        );
    }
}
 
export default Reservation;