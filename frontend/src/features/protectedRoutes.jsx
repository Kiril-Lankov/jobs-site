import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, allowedRoles }) => {
  
  const userType = useSelector((state) => state.auth.userInfo?.user_type);

  // eslint-disable-next-line react/prop-types
  if (!allowedRoles.includes(userType)) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default ProtectedRoute;
