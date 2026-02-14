import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/layout/Header';
import { Sidebar } from "../components/layout/Sidebar";
import RightSidebar from '../components/layout/RightSidebar';

const MainLayout = ({ children, showRightSidebar = true, showLeftSidebar = true, fullWidth = false }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const getMainClasses = () => {
    if (fullWidth) return 'pt-14';
    let classes = 'pt-14';
    if (showLeftSidebar) classes += ' lg:ml-[280px]';
    if (showRightSidebar) classes += ' xl:mr-[280px]';
    return classes;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {showLeftSidebar && <Sidebar />}
      <main className={getMainClasses()}>
        {children}
      </main>
      {showRightSidebar && <RightSidebar />}
    </div>
  );
};

export default MainLayout;
