export const API_URL = process.env.REACT_APP_BASE_API_URL + '/api/1.0';
export const Googlemap_key = process.env.REACT_APP_GOOGLEMAP_KEY;
export const BACKEND_OPEN_URL = 'https://797d-114-25-231-98.jp.ngrok.io';
export const LINE_CALLBACK_URL =
  BACKEND_OPEN_URL + '/api/1.0/auth/user/register/line';

// = GET
export const LINE_LOGIN_URL =
  process.env.REACT_APP_LINE_LOGIN_URL + '&state=ohdogcat_Line_Login';

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
export const BE_URL = process.env.REACT_APP_BASE_API_URL;
