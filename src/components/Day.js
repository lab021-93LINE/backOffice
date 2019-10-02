import React, { Component } from 'react'

export default class Day extends Component {
    constructor(props) {
        super(props)                
        console.log('props: ', props);
        this.state = {
            year : 0,
            month : 0,
            day : 0,
            dayOfWeek: null,
            conferenceList : []
        }
    }
    
    splitDate(){
        let date = this.props.date.split('-');
        let parse = this.props.conferenceList;
        console.log('parse: ', parse);
        this.setState({
            year : date[0],
            month : date[1],
            day : date[2],
            dayOfWeek : this.props.dayOfWeek,
            conferenceList : parse
        });        
    }

  
    
    componentDidMount(){
        this.splitDate();
    }

    render() {
        return (
            <div className="day-column">
                {this.state.dayOfWeek}<br/>
                {this.state.day}   
                {this.state.conferenceList.length}          
            </div>
        )
    }
}
