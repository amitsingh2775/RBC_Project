import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../state/authAtom';

const Navbar = () => {
  const user = useRecoilValue(authState).user;
  const setAuthState = useSetRecoilState(authState);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthState({ user: null, token: null });
    navigate('/');
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">RBC App</h1>
        <ul className="flex space-x-4">
          {user ? (
            <>
              <li>
                <Link to="/profile" className="text-white hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="text-white hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white hover:underline">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
