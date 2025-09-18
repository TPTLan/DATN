import React, { useState } from 'react';
import SlideBarAdmin from './SlideBarAdmin';

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white p-4 transition-all duration-300
        ${isSidebarOpen ? 'w-64' : 'w-20'} shrink-0`}
      >
        <SlideBarAdmin />
        <button 
          onClick={toggleSidebar} 
          className="mt-4 md:hidden block"
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
