import React, { Component } from 'react';
import 'assets/css/signin.css'
class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            type: '',
            status: true,
            errorMessage: '에러가낫슈'
         }
    }

    handleValue(e){
        console.log('vaule = ',e.target.value);
        // this.setState({value});
    }

    componentDidMount(){
        let type = 'text';
        if(this.props.formId === 'PASSWORD'){
            type = 'password';
        } 
        else if(this.props.formId === 'AGE'){
            type = 'text';
        }

        this.setState({type});
    }

    //vaild

    render() { 
        return (
        <div className="signin-form-container">
            <span className="title">{this.props.title}</span>
            <div>
                <input type={this.state.type} onChange={e => this.handleValue(e)}/>
                <label className={this.state.status ? 'hidden' : '' }>{this.state.errorMessage}</label>
            </div>
        </div>
        );
    }
}
 
export default SignForm;