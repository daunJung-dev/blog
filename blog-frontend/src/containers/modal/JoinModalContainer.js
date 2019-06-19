import React, { Component } from "react";
import JoinModal from "components/modal/JoinModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

class JoinModalContainer extends Component {
  handleJoin = async () => {
    const { BaseActions, password } = this.props;
    try {
      await BaseActions.login(password);
      BaseActions.hideModal("join");
      localStorage.logged = "true";
    } catch (e) {
      console.log(e);
    }
  };
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal("join");
  };
  handleChangeEmail = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeEmailInputJoin(value);
  };
  handleChangePassword = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInputJoin(value);
  };
  handleChangePasswordCheck = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordCheckInputJoin(value);
  };
  handleChangeName = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeNameInputJoin(value);
  };
  handleChangeAddr = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeAddrInputJoin(value);
  };
  handleChangePhone = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePhoneInputJoin(value);
  };
  handleKeyPress = e => {
    // 엔터 키가 눌리면 로그인 호출
    if (e.key === "Enter") {
      this.handleJoin();
    }
  };
  render() {
    const {
      handleCancel,
      handleChangeEmail,
      handleChangePassword,
      handleChangePasswordCheck,
      handleChangeName,
      handleChangeAddr,
      handleChangePhone,
      handleJoin,
      handleKeyPress
    } = this;
    const {
      visible,
      password,
      name,
      email,
      addr,
      phone,
      passwordCheck,
      error
    } = this.props;

    return (
      <JoinModal
        visible={visible}
        email={email}
        password={password}
        passwordCheck={passwordCheck}
        name={name}
        addr={addr}
        phone={phone}
        error={error}
        onCancel={handleCancel}
        onJoin={handleJoin}
        onKeyPress={handleKeyPress}
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onChangePasswordCheck={handleChangePasswordCheck}
        onChangeAddr={handleChangeAddr}
        onChangeName={handleChangeName}
        onChangePhone={handleChangePhone}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(["modal", "join"]),
    email: state.base.getIn(["joinModal", "email"]),
    password: state.base.getIn(["joinModal", "password"]),
    passwordCheck: state.base.getIn(["joinModal", "passwordCheck"]),
    addr: state.base.getIn(["joinModal", "addr"]),
    name: state.base.getIn(["joinModal", "name"]),
    phone: state.base.getIn(["joinModal", "phone"]),
    error: state.base.getIn(["joinModal", "error"])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(JoinModalContainer);
