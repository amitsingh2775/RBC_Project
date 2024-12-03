import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',  // Unique ID for this atom
  default: {
    user: null,        // User object
    token: null,       // JWT token
  },
});
