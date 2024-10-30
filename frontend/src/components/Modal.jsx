import { useState } from 'react';
import { useLoginEmployeeMutation, useLoginCompanyMutation } from '../features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Modal = ({ isToggled, setIsModalToggled, title, userRole }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const [loginEmployee] = useLoginEmployeeMutation();
  const [loginCompany] = useLoginCompanyMutation();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      let result;
      if (userRole === 'employee') {
        result = await loginEmployee(formData).unwrap();
      } else {
        result = await loginCompany(formData).unwrap();
      }
      
      dispatch(setAuthData({ userInfo: result.payload }));

      // Close the modal and navigate based on user role
      setIsModalToggled(false);
      navigate(userRole === 'employee' ? '/employee-dashboard' : '/company-dashboard');
    } catch (err) {
      setError(err.data?.message || 'An error occurred during login.');
    }
  };

  return (
    <>
      {isToggled ? (
        <div
          className="flex fixed top-0 left-0 w-full h-full bg-black/[.5] justify-center items-center"
          onClick={() => setIsModalToggled(false)}
        >
          <div
            className="bg-white p-5 rounded-md w-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="text-right cursor-pointer text-[#004AAD] font-bold"
              onClick={() => setIsModalToggled(false)}
            >
              &times;
            </span>
            <h2 className="text-2xl mb-4 text-center">{title}</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter email"
                required
              />

              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter password"
                required
              />

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <button type="submit" className="w-full p-2 bg-[#004AAD] text-white rounded">
                Login
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
