import React from 'react'
import 'assets/css/login.css'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userId: '',
            userPassword: ''
        }
    }


    handleUserId(id){
        console.log('id = ',id);
        this.setState({'userId': id});
    }

    handleUserPassword(password){
        console.log('password = ',password);
        this.setState({'userPassword': password});
    }

    onsubmit(){
        // id , password 서버로 보냄
        //페이지 이동
        console.log('id = ',this.state.userId);
        console.log('password = ',this.state.userPassword);
    }

    //check id , password
    



    render() {
        return (
            <div className="login-container">
                <div className="title">Login</div>
                <div class="login-content">
                    <input type="text" placeholder="ID" value={this.state.userId} onChange={(e) => this.handleUserId(e.target.value)}/>
                    <input type="text" placeholder="Password" value={this.state.userPassword} onChange={(e)=> this.handleUserPassword(e.target.value)}/>
                </div>
                <button onClick={() => this.onsubmit()}>SUBMIT</button>
            </div>
        )
    }
}
export default Login;