import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  // 이메일,닉네임,비밀번호,비밀번호 확인
  email: '',
  password: '',
  passwordCheck: '',
  nickName: '',
  // 오류메세지
  emailMessage: '',
  passwordMessage: '',
  passwordCheckMessage: '',
  nickNameMessage: '',
  // 유효성 검사
  isEmail: 'false',
  isNickName: 'false',
  isPassword: 'false',
  isPasswordCheck: 'false',
};

const counterSlice = createSlice({
  name: 'LoginModule',
  initialState,
  reducers: {
    //switch (action.type) {
    CHANGE_EMAIL: (state, action) => {
      state.email = action.payload;
    },
    CHANGE_PASSWORD: (state, action) => {
      state.password = action.payload;
    },
    CHANGE_PASSWORDCHECK: (state, action) => {
      state.passwordCheck = action.payload;
    },
    CHANGE_NICKNAME: (state, action) => {
      state.nickName = action.payload;
    },
    // 오류 메세지를 띄우는 함수입니다. 조건 만족시에 따라 메세지가 달라집니다.
    CHANGE_EMAIL_MESSAGE: (state, action) => {
      const emailRule =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = action.payload;

      state.emailMessage = !emailRule.test(emailCurrent)
        ? '이메일 형식으로 입력해주세요.'
        : '올바른 이메일 형식입니다.✅';
      state.isEmail = !emailRule.test(emailCurrent);
    },

    CHANGE_NICKNAME_MESSAGE: (state, action) => {
      state.nickNameMessage =
        action.payload.length < 2 || action.payload.length > 5
          ? '2글자 이상 5글자 미만으로 입력해주세요.'
          : '올바른 이름 형식입니다.✅';
      state.isNickName = action.payload.length < 2 || action.payload.length > 5;
    },
    CHANGE_PASSWORD_MESSAGE: (state, action) => {
      const passwordRule =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = action.payload;
      state.passwordMessage = !passwordRule.test(passwordCurrent)
        ? '숫자+영문자+특수문자 조합으로 입력해주세요.'
        : '올바른 비밀번호 형식입니다.✅';
      state.isPassword = !passwordRule.test(passwordCurrent);
    },
    CHANGE_PASSWORDCHECK_MESSAGE: (state, action) => {
      const passwordCheckCurrent = action.payload;

      state.passwordCheckMessage =
        state.password !== passwordCheckCurrent
          ? '비밀번호가 다릅니다. 다시 확인해주세요.'
          : '입력한 비밀번호와 일치합니다.✅ ';
      state.isPasswordCheck = state.password !== passwordCheckCurrent;
    },
    // 칸을 빈칸으로 refresh 해주는 기능입니다.
    CLEAR: (state, action) => {
      state.email = '';
      state.password = '';
      state.passwordCheck = '';
      state.nickName = '';
    },
  },
});
export default counterSlice.reducer;

export const {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORDCHECK,
  CHANGE_NICKNAME,
  CHANGE_EMAIL_MESSAGE,
  CHANGE_NICKNAME_MESSAGE,
  CHANGE_PASSWORD_MESSAGE,
  CHANGE_PASSWORDCHECK_MESSAGE,
  CLEAR,
} = counterSlice.actions;
