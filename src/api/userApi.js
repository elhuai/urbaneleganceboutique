import axios from 'axios';
import { LINE_CALLBACK_URL } from '../utils/config';
import { API_URL } from '../utils/config';
import {
  handleSuccess,
  handleWarning,
} from '../utils/handler/handleStatusCard';

const credentialsConfig = {
  withCredentials: true,
};

export const editSocialName = async (
  socailName,
  confirm,
  setInputError,
  setUser
) => {
  console.log('api', setUser);
  try {
    const result = await axios.post(
      `${API_URL}/user/edit/social_name`,
      {
        socialName: socailName,
      },
      credentialsConfig
    );
    if (result.status === 201) {
      setUser((user) => ({ ...user, data: result.data.user, auth: true }));
      confirm();
    }
  } catch (error) {
    console.error(error);
    if (error.response.data.login === false) {
      handleWarning('登入逾時，請重新登入', '/');
    } else if (error.response.data.message === '無法使用') {
      return setInputError(error.response.data.error.msg);
    }
  }
};
