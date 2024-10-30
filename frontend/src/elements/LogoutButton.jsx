import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../features/auth/authApiSlice';

const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap(); // Call the logout mutation
      navigate('/login'); // Redirect after successful logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="ml-2">
      Logout
    </button>
  );
};

export default LogoutButton;
