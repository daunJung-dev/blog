import React, { Component } from "react";
import LoginModal from "components/modal/LoginModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, id, password } = this.props;
    try {
      // 로그인 시도, 성공 시 모달 닫기
      await BaseActions.login(id, password);
      BaseActions.hideModal("login");
      localStorage.logged = "true";
    } catch (e) {
      console.log(e);
    }
  };
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal("login");
  };
  handleChangeId = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeIdInput(value);
  };
  handleChangePassword = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  };
  handleKeyPress = e => {
    // 엔터 키가 눌리면 로그인 호출
    if (e.key === "Enter") {
      this.handleLogin();
    }
  };
  render() {
    const {
      handleLogin,
      handleCancel,
      handleChangeId,
      handleChangePassword,
      handleKeyPress
    } = this;
    const { visible, error, id, password } = this.props;

    return (
      <LoginModal
        onLogin={handleLogin}
        onCancel={handleCancel}
        onChangeId={handleChangeId}
        onChangePassword={handleChangePassword}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        id={id}
        password={password}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(["modal", "login"]),
    id: state.base.getIn(["loginModal", "id"]),
    password: state.base.getIn(["loginModal", "password"]),
    error: state.base.getIn(["loginModal", "error"])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);
