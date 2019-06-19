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
  onChangeEmail,
  onChangePassword,
  onChangePasswordCheck,
  onChangeAddr,
  onChangeName,
  onChangePhone
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx("form")}>
      <div onClick={onCancel} className={cx("close")}>
        &times;
      </div>
      <div className={cx("title")}>회원가입</div>
      <div>
        <label htmlFor="user-email">이메일</label>
        <input
          name="user-email"
          type="email"
          placeholder="email 입력"
          required
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <input
          name="user-password"
          type="password"
          placeholder="비밀번호 입력"
          required
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호 확인</label>
        <input
          name="user-password-check"
          type="password"
          placeholder="비밀번호 확인"
          required
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
      </div>
      <div>
      <label htmlFor="user-name">이름</label>
      <input
          name="user-name"
          type="text"
          placeholder="이름 입력"
          value={name}
          required
          onChange={onChangeName}
        />
      </div>
      <div>
      <label htmlFor="user-addr">비밀번호 확인</label>
      <input
        name="user-addr"
          type="text"
          placeholder="주소 입력"
          value={addr}
          required
          onChange={onChangeAddr}
        />
      </div>
      <div>
      <label htmlFor="user-phone">전화번호</label>
      <input
          name="user-phone"
          type="text"
          placeholder="번호 입력(- 없이)"
          value={phone}
          required
          onChange={onChangePhone}
        />
      </div>
      {error && <div className={cx("error")}>양식을 모두 채워주세요.</div>}
      <div className={cx("login")} onClick={onJoin}>
        회원가입
      </div>
    </div>
  </ModalWrapper>
);

export default JoinModal;
