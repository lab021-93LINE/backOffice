import React from 'react'
import SignForm from 'components/SignForm'
import 'assets/css/signin.css'

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userId : '',
            userPassword: '',
            userRePassword: '',
            userName: '',
            userEmail: '',
            userAge: '',
        }
    }

    
    /**
     * 회원 가입 신청 함수
     */
    onSubmit(){

        if(this.state.userId.length === 0)  this.appendLabel('id', 'id를 입력하세요.');
        if(this.state.userPassword.length === 0) this.appendLabel('password', 'password를 입력하세요.');
        if(this.state.userRePassword.length === 0) this.appendLabel('re-password', 'password가 일치하지 않습니다.');
        if(this.state.userName.length === 0) this.appendLabel('name', 'name을 입력하세요.');
        if(this.state.userEmail.length === 0) this.appendLabel('email', 'email을 입력해주에요.');
        if(this.state.age.length === 0) this.appendLabel('age', '나이를 입력하세요.');

        console.log('id = ',this.state.userId);
        console.log('password = ',this.state.userPassword);
        console.log('re password = ',this.state.userRePassword);
        console.log('name = ',this.state.userName);
        console.log('email = ',this.state.userEmail);
        console.log('age = ',this.state.userAge);



    }

    
    /**
     * 데이터 타당성 확인
     * @param {String} id 
     * @param {String} range
     */
    checkVaild(id, range, errorMessage) {
        const length = document.getElementById(id).childNodes[1].value.length;
        if (length === 0) {
            this.appendLabel(id, errorMessage);
            return;
        }

        if (parseInt(range[0]) > length || parseInt(range[1]) < length) {
            this.appendLabel(id, errorMessage);
        } else {
            // 에러 메시지 삭제
            const parent = document.getElementById(id);
            parent.removeChild(parent.childNodes[2]);
        }
    }

    /**
     * label 태그 추가 함수
     * @param {String} id 
     * @param {String} message 
     */
    appendLabel(id, message){

        // console.log('childElementCount = ',document.getElementById(id).childElementCount);
        // if(document.getElementById(id).childElementCount > 1) return;

        const d = document.getElementById(id);
        const node = document.createElement("div");
        var textnode = document.createTextNode(message);
        node.classList.add('error');
        node.appendChild(textnode);        
        d.appendChild(node);
    }

    onChangeId(id){
        this.setState({'userId': id});
    }

    onChangePassword(password){
        this.setState({'userPassword': password});
    }

    onChangeRePassword(password){
        this.setState({'userRePassword': password});
    }

    onChangeName(name){
        this.setState({'userName': name});
    }

    onChangeUserEmail(email){
        this.setState({'userEmail': email});
    }

    onChangeUserAge(age){
        this.setState({'userAge': age});
    }



    render(){
        return (
            <div className="sigin-container">
                <div className="title">SIGN IN</div>
                <div className="content">
                    <SignForm
                        formId = 'PASSWORD'
                        title = 'password'
                    />
                    <SignForm
                        formId = 'ID'
                        title = 'id'
                    />
                    {/* <div id="id">*ID : <input type="text" placeholder="ID" onChange={(e) => this.onChangeId(e.target.value)} 
                    onBlur={() => this.checkVaild('id', [1,6], '0~6자리 내로 입력해주세요.')}/></div>
                    <div id="password">*PASSWORD : <input type="text" placeholder="PASSWORD" onChange={(e) => this.onChangePassword(e.target.value)}
                    onBlur={() => this.checkVaild('password', [1,4], '0~4자리 내로 입력해주세요.')}/></div>
                    <div id="re-password">*RE PASSWORD : <input type="text" placeholder="RE PASSWORD" onChange={(e) => this.onChangeRePassword(e.target.value)}
                    onBlur={() => this.checkVaild('re-password', [], '입력하신 password와 일치하지 않습니다.')}/></div>
                    <div id="user-name">*NAME : <input type="text" placeholder="NAME" onChange={(e) => this.onChangeName(e.target.value)}
                    onBlur={() => this.checkVaild('user-name', [], '이름을 입력해주세요.')}/></div>
                    <div id="user-email">*EMAIL : <input type="email" placeholder="EMAIL" onChange={(e) => this.onChangeUserEmail(e.target.value)}
                    onBlur={() => this.checkVaild('user-email', [], '이메일 형식이 아닙니다.')}/></div>
                    <div id="user-age">AGE : <input type="text" placeholder="AGE" onChange={(e) => this.onChangeUserAge(e.target.value)}/></div> */}
                </div>
                <input type="checkbox" /> 개인 정보 수집에 동의하시겠습니까?<br/>
                <button onClick={() => this.onSubmit()}>가입</button>
            </div>
        );
    }
}

export default SignIn;