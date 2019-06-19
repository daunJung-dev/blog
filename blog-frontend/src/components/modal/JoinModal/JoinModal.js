import React from "react";
import styles from "./JoinModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "components/modal/ModalWrapper";

const cx = classNames.bind(styles);

const JoinModal = ({
  visible,
  email,
  password,
  passwordCheck,
  name,
  addr,
  phone,
  error,
  onCancel,
  onJoin,
  onKeyPress,
  onChangeEmail,
  onChangePassword,
  onChangePasswordCheck,
  onChangeAddr,
  onChangeName,
  onChangePhone,
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx("form")}>
      <div onClick={onCancel} className={cx("close")}>
        &times;
      </div>
      <div className={cx("title")}>회원가입</div>
      <input
        type="email"
        placeholder="email 입력"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={onChangePassword}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
        onKeyPress={onKeyPress}
      />
      <input
        type="name"
        placeholder="이름 입력"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="주소 입력"
        value={addr}
        onChange={onChangeAddr}
      />
      <input
        type="text"
        placeholder="주소 입력"
        value={phone}
        onChange={onChangePhone}
      />
      {error && <div className={cx("error")}>양식을 모두 채워주세요.</div>}
      <div className={cx("login")} onClick={onJoin}>
        회원가입
      </div>
    </div>
  </ModalWrapper>
);

export default JoinModal;
