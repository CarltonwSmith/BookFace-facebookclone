import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser } from '../data/mockData';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem('fb_token');
    const storedUser = localStorage.getItem('fb_user');
    
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - will be replaced with actual API call
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const userData = { ...currentUser, email };
      localStorage.setItem('fb_token', 'mock_token_123');
      localStorage.setItem('fb_user', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        ...currentUser,
        id: `user-${Date.now()}`,
        firstName,
        lastName,
        email
      };
      localStorage.setItem('fb_token', 'mock_token_123');
      localStorage.setItem('fb_user', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('fb_token');
    localStorage.removeItem('fb_user');
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
