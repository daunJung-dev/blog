import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = ({postId, logged, onRemove, onLoginClick, onJoinClick, clientId}) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">고칠래 만들래</Link>
      </div>
      <div className={cx('menu')}>
        <Link to="/#">환영합니다</Link>
        <Link to="/#">수선하기</Link>
        <Link to="/#">후기작성</Link>
      </div>

      { !(logged) && <div className={cx('right')}>
        <Button key="login" theme="outline" onClick={onLoginClick}>로그인</Button>
        <Button key="join" theme="outline" onClick={onJoinClick}>회원가입</Button>
      </div>}
      { logged &&  <div className={cx('right')}>
        {!postId&&<Button key="mypage" theme="outline" to={`/mypage?id=${clientId}`}>내 정보</Button>}
        {
          // flex를 유지하기 위하여 배열 형태로 렌더링합니다.
          postId && [
            <Button key="edit" theme="outline" to={`/editor?id=${postId}`}>수정</Button>,
            <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
          ]
        }
        <Button theme="outline" to="/editor">새 포스트</Button>
      </div> }
    </div>
  </header>
);

export default Header;
