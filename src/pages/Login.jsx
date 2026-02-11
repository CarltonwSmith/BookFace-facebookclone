import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from "../components/ui/input";
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[980px] flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        {/* Left Section - Branding */}
        <div className="text-center lg:text-left lg:pt-10 lg:flex-1">
          <svg viewBox="0 0 36 36" className="w-16 h-16 lg:w-[300px] lg:h-[106px] mx-auto lg:mx-0 lg:-ml-8" fill="url(#fbGradientLogin)">
            <defs>
              <linearGradient id="fbGradientLogin" x1="50%" x2="50%" y1="97.078%" y2="0%">
                <stop offset="0%" stopColor="#0062E0" />
                <stop offset="100%" stopColor="#19AFFF" />
              </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
            <path fill="white" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
          </svg>
          <h1 className="text-2xl lg:text-[28px] text-gray-700 mt-4 lg:mt-0 leading-relaxed max-w-md">
            Facebook helps you connect and share with the people in your life.
          </h1>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full max-w-[396px]">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Input
                type="email"
                placeholder="Email address or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[52px] text-[17px] border-gray-200 focus:border-blue-500"
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[52px] text-[17px] border-gray-200 focus:border-blue-500"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-[48px] bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-lg"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>

              <div className="text-center">
                <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
                  Forgotten password?
                </Link>
              </div>

              <Separator className="my-4" />

              <div className="text-center">
                <Link to="/signup">
                  <Button
                    type="button"
                    className="h-[48px] px-4 bg-green-500 hover:bg-green-600 text-white text-[17px] font-bold rounded-lg"
                  >
                    Create new account
                  </Button>
                </Link>
              </div>
            </form>
          </div>

          <p className="text-center mt-6 text-sm">
            <Link to="/pages" className="hover:underline"><strong>Create a Page</strong></Link> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
