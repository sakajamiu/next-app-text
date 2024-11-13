import Axios from '@/app/config/Axios';

import Toast from '../components/toast';

export default async function customGet(Url: string) {
  try {
    const response = await Axios.get(Url);
    return response.data;
  } catch (error) {
    Toast(error as string, { type: 'error' });
    console.log(error);
  }
}
