import React from 'react'
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
        console.log('id = ',this.state.userId);
        console.log('password = ',this.state.userPassword);
        console.log('re password = ',this.state.userRePassword);
        console.log('name = ',this.state.userName);
        console.log('email = ',this.state.userEmail);
        console.log('age = ',this.state.userAge);
    }

    
    /**
     * 
     * @param {String} id 
     * @param {String} range 
     */
    checkVaild(id, range) {
        console.log('id = ', id);
        console.log('range = ', range);

        const length = document.getElementById(id).childNodes[1].value.length;
        const range1 = range.split(',');

        if(parseInt(range1[0]) > length || parseInt(range1[1]) < length){
            this.appendLabel(id, '아이디를 입력주세요');
        }else{
            const parent = document.getElementById(id);
            console.log('parent = ',parent);
        }
    }

    /**
     * label 태그 추가 함수
     * @param {String} id 
     * @param {String} message 
     */
    appendLabel(id, message){
        const d = document.getElementById(id);
        const node = document.createElement("label");
        var textnode = document.createTextNode(message);
        node.appendChild(textnode);        
        d.after(node);
    }

    onChangeId(id){
        console.log('id = ',id);
        this.setState({'userId': id}, () => {
            console.log('thi.state.id = ',this.state.userId);
        })
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
            <div className="container">
                <div className="title">SIGN IN</div>
                <div className="content">
                    <div id="id">ID : <input type="text" placeholder="ID" onChange={(e) => this.onChangeId(e.target.value)}/></div>
                    <div id="password">PASSWORD : <input type="text" placeholder="PASSWORD" onChange={(e) => this.onChangePassword(e.target.value)}/></div>
                    <div id="re-password">RE PASSWORD : <input type="text" placeholder="RE PASSWORD" onChange={(e) => this.onChangeRePassword(e.target.value)}/></div>
                    <div id="user-name">NAME : <input type="text" placeholder="NAME" onChange={(e) => this.onChangeName(e.target.value)}/></div>
                    <div id="user-email">EMAIL : <input type="email" placeholder="EMAIL" onChange={(e) => this.onChangeUserEmail(e.target.value)}/></div>
                    <div id="user-age">AGE : <input type="text" placeholder="AGE" onChange={(e) => this.onChangeUserAge(e.target.value)}/></div>
                </div>
                <input type="checkbox" /> 개인 정보 수집에 동의하시겠습니까?<br/>
                <button onClick={() => this.onSubmit()}>가입</button>
            </div>
        );
    }
}

export default SignIn;