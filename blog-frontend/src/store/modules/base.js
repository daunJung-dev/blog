import { createAction, handleActions } from "redux-actions";
import * as api from "lib/api";

import { Map } from "immutable";
import { pender } from "redux-pender";

// action types
const SHOW_MODAL = "base/SHOW_MODAL";
const HIDE_MODAL = "base/HIDE_MODAL";

const LOGIN = "base/LOGIN";
const LOGOUT = "base/LOGOUT";
const CHECK_LOGIN = "base/CHECK_LOGIN";
const CHANGE_ID_INPUT = "base/CHANGE_ID_INPUT";
const CHANGE_PASSWORD_INPUT = "base/CHANGE_PASSWORD_INPUT";
const CHANGE_EMAIL_INPUT_JOIN = "base/CHANGE_EMAIL_INPUT_JOIN";
const CHANGE_PASSWORD_INPUT_JOIN = "base/CHANGE_PASSWORD_INPUT_JOIN";
const CHANGE_PASSWORDCHECK_INPUT_JOIN = "base/CHANGE_PASSWORDCHECK_INPUT_JOIN";
const CHANGE_NAME_INPUT_JOIN = "base/CHANGE_NAME_INPUT_JOIN";
const CHANGE_ADDR_INPUT_JOIN = "base/CHANGE_ADDR_INPUT_JOIN";
const CHANGE_PHONE_INPUT_JOIN = "base/CHANGE_PHONE_INPUT_JOIN";
const INITIALIZE_LOGIN_MODAL = "base/INITIALIZE_LOGIN_MODAL";
const INITIALIZE_JOIN_MODAL = "base/INITIALIZE_JOIN_MODAL";
const TEMP_LOGIN = "base/TEMP_LOGIN";

const JOIN = "base/JOIN";

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const changeIdInput = createAction(CHANGE_ID_INPUT);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const join = createAction(JOIN, api.join);
export const changeEmailInputJoin = createAction(CHANGE_EMAIL_INPUT_JOIN);
export const changePasswordInputJoin = createAction(CHANGE_PASSWORD_INPUT_JOIN);
export const changePasswordCheckInputJoin = createAction(CHANGE_PASSWORDCHECK_INPUT_JOIN);
export const changeNameInputJoin = createAction(CHANGE_NAME_INPUT_JOIN);
export const changeAddrInputJoin = createAction(CHANGE_ADDR_INPUT_JOIN);
export const changePhoneInputJoin = createAction(CHANGE_PHONE_INPUT_JOIN);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);
export const initializeJoinModal = createAction(INITIALIZE_JOIN_MODAL);
export const tempLogin = createAction(TEMP_LOGIN);

// initial state
const initialState = Map({
  // 모달의 가시성 상태
  modal: Map({
    remove: false,
    login: false, // 추후 구현될 로그인 모달
    join: false,
  }),
  loginModal: Map({
    id: "",
    password: "",
    error: false
  }),
  joinModal: Map({
    email: "",
    password: "",
    name: "",
    addr: "",
    phone: "",
    error: false
  }),
  logged: false // 현재 로그인 상태
});

// reducer
export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(["modal", modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(["modal", modalName], false);
    },
    ...pender({
      type: JOIN,
      onSuccess: (state, action) => {
        // 회원가입 성공시
        return
      },
      onError: (state, action) => {
        // 에러 발생 시
        return state
          .setIn(["joinModal", "error"], true)
          .setIn(["joinModal", "password"], "");
      }
    }),
    ...pender({
      type: LOGIN,
      onSuccess: (state, action) => {
        // 로그인 성공 시
        return state.set("logged", true);
      },
      onError: (state, action) => {
        // 에러 발생 시
        return state
          .setIn(["loginModal", "error"], true)
          .setIn(["loginModal", "password"], "");
      }
    }),
    ...pender({
      type: CHECK_LOGIN,
      onSuccess: (state, action) => {
        const { logged } = action.payload.data;
        return state.set("logged", logged);
      }
    }),
    [CHANGE_ID_INPUT]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["loginModal", "id"], value);
    },
    [CHANGE_PASSWORD_INPUT]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["loginModal", "password"], value);
    },
    [CHANGE_EMAIL_INPUT_JOIN]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["joinModal", "email"], value);
    },
    [CHANGE_PASSWORD_INPUT_JOIN]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["joinModal", "password"], value);
    },
    [CHANGE_PASSWORDCHECK_INPUT_JOIN]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["joinModal", "passwordCheck"], value);
    },
    [CHANGE_NAME_INPUT_JOIN]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["joinModal", "name"], value);
    },
    [CHANGE_ADDR_INPUT_JOIN]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["joinModal", "addr"], value);
    },
    [CHANGE_PHONE_INPUT_JOIN]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(["joinModal", "phone"], value);
    },
    [INITIALIZE_LOGIN_MODAL]: (state, action) => {
      // 로그인 모달의 상태를 초기 상태로 설정합니다(텍스트/에러 초기화).
      return state.set("loginModal", initialState.get("loginModal"));
    },
    [INITIALIZE_JOIN_MODAL]: (state, action) => {
      // 회원가입 모달의 상태를 초기 상태로 설정합니다(텍스트/에러 초기화).
      return state.set("joinModal", initialState.get("joinModal"));
    },
    [TEMP_LOGIN]: (state, action) => {
      return state.set("logged", true);
    }
  },
  initialState
);
