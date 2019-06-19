const Joi = require('joi');
const Client = require('models/client');

const { ADMIN_ID: adminId, ADMIN_PASS: adminPass } = process.env;

exports.login = (ctx) => {
  const { id, password } = ctx.request.body;
  if (adminId === id && adminPass === password) {
    ctx.body = {
      success: true
    };
    // 로그인에 성공하면 logged 값을 true로 설정합니다.
    ctx.session.logged = true;
  } else {
    ctx.body = {
      success: false
    };
    ctx.status = 401; // Unauthorized
  }
};

exports.check = (ctx) => {
  ctx.body = {
    // 문자를 두 번 입력하여
    // 값이 존재하지 않을 때도 false를 반환하도록 설정합니다
    logged: !!ctx.session.logged
  };
};

exports.logout = (ctx) => {
  ctx.session = null;
  ctx.status = 204; // No Content
};

exports.join = async (ctx) => {
  // 객체가 지닌 값들을 검증합니다.
  const schema = Joi.object().keys({
    email: Joi.string().required(), // 뒤에 required를 붙여주면 필수 항목이라는 의미
    password: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required() // 문자열 배열
  });

  // 첫 번째 파라미터는 검증할 객체, 두 번째는 스키마
  const result = Joi.validate(ctx.request.body, schema);

  // 오류 발생 시 오류 내용 응답
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    email, password, name, phone, addr
  } = ctx.request.body;

  // 새 client 인스턴스를 생성합니다.
  const client = new Client({
    email, password, name, phone, addr
  });

  try {
    await client.save(); // 데이터베이스에 등록합니다.
    ctx.body = client; // 저장된 결과를 반환합니다.
  } catch (e) {
    // 데이터베이스의 오류 발생
    ctx.throw(e, 500);
  }
};