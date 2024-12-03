import React from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../state/authAtom';

const Profile = () => {
  const { user } = useRecoilValue(authState); // Get user data from Recoil state

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <>
          <p className="text-lg mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-lg mb-4"><strong>Role:</strong> {user.role}</p>
        </>
      ) : (
        <p className="text-lg">You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
