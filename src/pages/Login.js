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
    onSubmit(){
        // id , password  api 호출
        this.setState({
            userId: document.getElementById('user-id').value,
            userPassword: document.getElementById('user-password').value
        }, ()=>{
            console.log('id = ',this.state.userId);
            console.log('password = ',this.state.userPassword);
            console.log('this = ',this);
            const data = require('../user.json')['USER'];
            this.successLogin(data);
        });
    }


    /**
     * 로그인 실패시 호출되는 함수
     */
    failLogin(){
        // 아이디따로 비번따로?
        alert('아이디와 비밀번호를 다시 확인해주세요.');
    }

    /**
     * 로그인 성공시 호출되는 함수
     */
    successLogin(user){
        //아이디 비번 세션 저장
        alert(user.USER_NAME + "님 반갑습니다!");

        //메인페이지로 이동
        
    }

    /**
     * 회원 가입 페이지 이동 함수
     */
    signIn(){
        // 회원 가입 페이지로 이동
        this.props.history.push('/SignIn');
    }

    

    render() {
        return (
            <div className="login-container">
                <div className="title">Login</div>
                <div className="login-content">
                    <input type="text" placeholder="ID" id="user-id"/>
                    <input type="text" placeholder="PASSWORD" id="user-password"/>
                </div>
                <button onClick={() => this.onSubmit()}>SUBMIT</button>
                <button onClick={() => this.signIn()}>SIGN IN</button>
            </div>
        )
    }
}
export default Login;