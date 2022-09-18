import axios from 'axios';
import { API_URL } from '../utils/config';

export const registerApi = async (registInfo) => {
  try {
    let res = await axios.post(`${API_URL}/auth/user/register`, registInfo, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
