'use client';

import { users } from '@/data/users';

export interface User {
  id: number;
  email: string;
  password: string;
}

export const authenticate = (email: string, password: string): User | null => {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  return user || null;
};

export const setSession = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
  }
};

export const getSession = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  }
};

