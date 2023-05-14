import { redirect } from 'react-router';
import { auth } from './firebase';

const loader = () => {
  if (!auth.currentUser) return redirect('/');
  return null;
};

export default loader;
