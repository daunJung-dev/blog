import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible, id, password, error, onCancel,  onLogin, onChangeId, onChangePassword, onKeyPress
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>로그인</div>
      <div className={cx('description')}>관리자 비밀번호를 입력하세요</div>
      <input autoFocus type="text" placeholder="아이디 입력" value={id} onChange={onChangeId}/>
      <input autoFocus type="password" placeholder="비밀번호 입력" value={password} onChange={onChangePassword} onKeyPress={onKeyPress}/>
      { error && <div className={cx('error')}>로그인 실패</div> }
      <div className={cx('login')} onClick={onLogin}>로그인</div>
    </div>
  </ModalWrapper>
);

export default LoginModal;
