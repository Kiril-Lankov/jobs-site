// src/hooks/useUser.js
import { useSelector } from 'react-redux';

const useAuth = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const userType = userInfo?.user_type; 
  
  return { userInfo, userType };
};

export default useAuth;
