import { redirect } from 'react-router-dom';

const loader = async () => {
  const userToken = sessionStorage.getItem('Auth Token');
  if (userToken) return redirect('/main');
  return null;
};

export default loader;
