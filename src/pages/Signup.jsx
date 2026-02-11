import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from "../components/ui/input";
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { X } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    gender: ''
  });
  const [error, setError] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    const result = await signup(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password
    );

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-[432px] w-full">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[32px] font-bold">Sign Up</h1>
              <p className="text-gray-500 text-[15px]">It's quick and easy.</p>
            </div>
            <Link to="/login">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </Link>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <Input
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="h-10 bg-gray-50 border-gray-200"
            />
            <Input
              placeholder="Surname"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="h-10 bg-gray-50 border-gray-200"
            />
          </div>

          <Input
            type="email"
            placeholder="Mobile number or email address"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="h-10 bg-gray-50 border-gray-200"
          />

          <Input
            type="password"
            placeholder="New password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className="h-10 bg-gray-50 border-gray-200"
          />

          {/* Birthday */}
          <div>
            <label className="text-xs text-gray-500">Date of birth</label>
            <div className="flex gap-2 mt-1">
              <Select onValueChange={(value) => handleChange('day', value)}>
                <SelectTrigger className="flex-1 bg-gray-50">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {days.map(day => (
                    <SelectItem key={day} value={String(day)}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleChange('month', value)}>
                <SelectTrigger className="flex-1 bg-gray-50">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={month} value={String(index + 1)}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleChange('year', value)}>
                <SelectTrigger className="flex-1 bg-gray-50">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-xs text-gray-500">Gender</label>
            <div className="flex gap-2 mt-1">
              {['Female', 'Male', 'Custom'].map((gender) => (
                <label
                  key={gender}
                  className={`flex-1 flex items-center justify-between px-3 py-2 border rounded-md cursor-pointer ${
                    formData.gender === gender ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <span className="text-sm">{gender}</span>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    className="w-4 h-4"
                  />
                </label>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed">
            People who use our service may have uploaded your contact information to Facebook.{' '}
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>.
          </p>

          <p className="text-[11px] text-gray-500 leading-relaxed">
            By clicking Sign Up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms</a>,{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Cookies Policy</a>.
          </p>

          <div className="pt-2 flex justify-center">
            <Button
              type="submit"
              disabled={isLoading}
              className="h-9 px-16 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-md"
            >
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
