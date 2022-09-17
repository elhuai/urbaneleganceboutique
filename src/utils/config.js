export const API_URL = process.env.REACT_APP_BASE_API_URL + '/api/1.0';

// = GET
export const LINE_LOGIN_URL =
  process.env.REACT_APP_LINE_LOGIN_URL +
  '&redirect_uri=https://96ad-2402-7500-5d1-3b6b-1d75-c0ab-fe4-5149.jp.ngrok.io/login';

// = GET/ query_string = access_token=<accessToken>
export const LINE_LOGIN_VERIFY_URL =
  'https://api.line.me/oauth2/v2.1/verify?access_token=';

// = POST
// ? payload =
// ? client_id=<你的channel_id>
// ? client_secret=<你的channel_secret>
// ? access_token=<User的accessToken>
export const LINE_LOGIN_REVOKE_URL = 'https://api.line.me/oauth2/v2.1/revoke';

// = POST/
// ? payload =
// ? grant_type='refresh_toke'
// ? refresh_token=<你的refresh_token>
// ? client_id=<你的channel_id>
// ? client_secret=<你的channel_secret>
export const LINE_LOGIN_REFRESH_URL = 'https://api.line.me/oauth2/v2.1/token';

// = GET/ Header：{`Authorization: Bearer ${access token}`}
export const LINE_GET_USER_PROFILE_URL = 'https://api.line.me/v2/profile';
