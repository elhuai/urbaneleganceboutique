import axios from 'axios';
import { BACKEND_OPEN_URL } from '../utils/config';
import { handleQRcodeCard } from '../utils/handler/card/handleQRcodeCard';
import { handleFailed } from '../utils/handler/card/handleStatusCard';
import { API_URL } from '../utils/config';

import {
  handleSuccess,
  handleWarning,
} from '../utils/handler/card/handleStatusCard';

const BASE_URL = API_URL + '/user';

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
      `${BASE_URL}/edit/social_name`,
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

export const getUserVoucher = async (setData) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/voucher`, credentialsConfig);
    setData(data.data);
  } catch (error) {
    console.error(error);
  }
};

export const exchangeUserVoucher = async (itemData, quantity) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/voucher/exchange/${itemData.product_id}?quantity=${quantity}`,
      credentialsConfig
    );
    handleQRcodeCard(`${BACKEND_OPEN_URL}${data.data.path}`);
  } catch (error) {
    console.error(error);
    if (error.response.status === 400) {
      handleFailed('請確認使用時間或兌換數量');
    }
  }
};
