import React, { Component } from 'react'
import {GoogleLogin} from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id: '',
            name:'',
            provider:'',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google',
        });
    }
    //Kakao Login
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        })
    }

    // Login fail
    responseFail = (err) => {
        console.log(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={process.env.REACT_APP_Google}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
                <KakaoButton
                    jsKey={process.env.REACT_APP_Kakao}
                    buttonText="Kakao"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}
const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`
const KakaoButton = styled(KakaoLogin)`
    padding:0;
    width:190px;
    height: 440px;
    lineheight: 44px;
    color:#783c00;
    background-color:#FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`
export default Login;