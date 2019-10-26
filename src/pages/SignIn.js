import React from 'react'
import SignForm from 'components/SignForm'
import firebase from 'server/firebase'
import 'assets/css/signin.css'

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
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
    onSubmit() {
        // this.idCheckValidation(this.state.userId);
        console.log(`id = ${this.state.userId}`);
        console.log(`password =  ${this.state.userPassword}`);
        console.log(`re password = ${this.state.userRePassword}`);
        console.log('name = ', this.state.userName);
        console.log('email = ', this.state.userEmail);
        console.log('age = ', this.state.userAge);

    }

    /**
     * 아이디 중복 체크 함수
     * @param {String} id 
     */
    idDuplicateCheck(id) {
        let dbUserRef = firebase.database().ref('user/');
        dbUserRef.orderByChild('id').equalTo(id).on('value', (snapshot) => {
            console.log('exist = ', snapshot.exists());
            if (snapshot.exists) return true;

            return false;
        });
    }

    /**
     * 1. id 있는지 확인
     * 2. 5자리 이상인지 확인
     * 3. 중복 체크
     * @param {String} id 
     * @return 타당성 체크 결과값 반환
     */
    idCheckValidation(id){
        let result = true;
        //글자 수 체크
        if(id.length < 5) {
            alert('5자리 이상 입력하세요!');
            result = false;
        }
        
        //중복 체크 함수 db에서 호출
        const duplicate = this.idDuplicateCheck(id);
        if(duplicate) {
            alert('이미 존재하는 id 입니다.');
            result = false;
        }

        return result;
    }


    handleChangeId = (e) => {
        console.log('this = ',this);
        this.setState({ 'userId': e.target.value });
        console.log('userId = ',this.state.userId);
    }

    handleChangePassword = (e) => {
        this.setState({ 'userPassword': e.target.value });
    }

    handleChangeRePassword = (e) => {
        this.setState({ 'userRePassword': e.target.value });
    }

    handleChangeName = (e) => {
        this.setState({ 'userName': e.target.value });
    }

    handleChangeUserEmail = (e) => {
        this.setState({ 'userEmail': e.target.value });
    }

    handleChangeUserAge = (e) => {
        this.setState({ 'userAge': e.target.value });
    }



    render() {
        return (
            <div className="signin-container">
                <div className="title">SIGN IN</div>
                <div className="content">
                    <SignForm
                        formId="ID"
                        title="Id"
                        handleValue={this.handleChangeId}
                    />
                    <SignForm
                        formId="PASSWORD"
                        title="Password"
                        handleValue={this.handleChangePassword}
                    />
                    <SignForm
                        formId="RE-PASSRORD"
                        title="Re Password"
                        handleValue={this.handleChangeRePassword}
                    />
                    <SignForm
                        formId="NAME"
                        title="Name"
                        handleValue={this.handleChangeName}
                    />
                    <SignForm
                        formId="EMAIL"
                        title="Email"
                        handleValue={this.handleChangeUserEmail}
                    />
                    <SignForm
                        formId="AGE"
                        title="Age"
                        handleValue={this.handleChangeUserAge}
                    />
                </div>
                <input type="checkbox" /> 개인 정보 수집에 동의하시겠습니까?<br />
                <button onClick={() => this.onSubmit()}>가입</button>
            </div>
        );
    }
}

export default SignIn;