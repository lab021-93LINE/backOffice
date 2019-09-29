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

    /**
     * 로그인 사도 함수
     */
    onsubmit(){
        // id , password 서버로 보냄
        //페이지 이동
        this.setState({
            userId: document.getElementById('user-id').value,
            userPassword: document.getElementById('user-password').value
        }, ()=>{
            console.log('id = ',this.state.userId);
            console.log('password = ',this.state.userPassword);
        });
    }

    

    render() {
        return (
            <div className="login-container">
                <div className="title">Login</div>
                <div class="login-content">
                    <input type="text" placeholder="ID" id="user-id"/>
                    <input type="text" placeholder="Password" id="user-password"/>
                </div>
                <button onClick={() => this.onsubmit()}>SUBMIT</button>
            </div>
        )
    }
}
export default Login;