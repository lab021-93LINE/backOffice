import React from 'react'
import 'assets/css/signin.css'

class SignIn extends React.Component{

    onSubmit(){

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
        console.log('range1 = ',range1);
        if(parseInt(range1[0]) > length || parseInt(range1[1]) < length){
            this.appendLabel(id,'아이디를 입력주세요');
        }else{
            const parent = document.getElementById(id);
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



    render(){
        return (
            <div className="container">
                <div className="title">SIGN IN</div>
                <div className="content">
                    <div id="id">ID : <input type="text" placeholder="ID" onBlur={() => this.checkVaild('id','0,10')}/></div>
                    <div id="password">PASSWORD : <input type="text" placeholder="PASSWORD" /></div>
                    <div id="re-password">RE PASSWORD : <input type="text" placeholder="RE PASSWORD" /></div>
                    <div id="user-name">NAME : <input type="text" placeholder="NAME" /></div>
                    <div id="user-email">EMAIL : <input type="email" placeholder="EMAIL" /></div>
                    <div id="user-age">AGE : <input type="text" placeholder="AGE" /></div>
                </div>
                <input type="checkbox" /> 개인 정보 수집에 동의하시겠습니까?<br/>
                <button onClick={() => this.onSubmit()}>회원 가입</button>
            </div>
        );
    }
}

export default SignIn;