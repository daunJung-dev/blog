import React from 'react';
import styles from './JoinModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const JoinModal = ({
  visible, id, password, name, email, addr, phone, error, onCancel,  onLogin,  onChange, onKeyPress
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>회원가입</div>
      <input autoFocus type="text" placeholder="아이디 입력" value={id} onChange={onChange}/>
      <input type="password" placeholder="비밀번호 입력" value={password} onChange={onChange}/>
      <input type="password" placeholder="비밀번호 확인" value={password} onChange={onChange} onKeyPress={onKeyPress}/>
      <input type="name" placeholder="이름 입력" value={first_name} onChange={onChange}/>
      <input type="email" placeholder="email 입력" value={email} onChange={onChange}/>
      <input type="text" placeholder="주소 입력" value={addr} onChange={onChange}/>
      <div className={cx('login')} onClick={onLogin}>회원가입</div>
    </div>
  </ModalWrapper>
);

export default JoinModal;
