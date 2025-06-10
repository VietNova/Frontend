import { FaCrown, FaBolt, FaBuilding, FaArrowLeft, FaHome } from 'react-icons/fa';

const LoginTemp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E2A5A] to-[#0A122E] text-white flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="flex flex-col items-center mb-12">
        <div className="mb-4 text-6xl">
          <FaBuilding />
        </div>
        <h1 className="text-5xl font-bold mb-2">CondoManager</h1>
        <p className="text-lg text-gray-300 text-center px-4">
          Smart Condominium Management System - Choose your role to get started
        </p>
      </div>

      {/* Login Cards Container (now links to individual login pages) */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <a href="/admin-login" className="bg-gradient-to-br from-[#E06D8A] to-[#AE4C7F] p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-sm cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="bg-white text-[#AE4C7F] p-4 rounded-full mb-4 text-3xl">
            <FaCrown />
          </div>
          <h2 className="text-3xl font-bold mb-2">Administrator</h2>
          <p className="text-gray-200 mb-4">Full system management rights</p>
          <button className="bg-white text-[#AE4C7F] px-8 py-3 rounded-full font-semibold text-lg flex items-center">
            <FaCrown className="mr-3" />
            <span>Admin Login</span>
            <span className="ml-3">&gt;</span>
          </button>
        </a>

        <a href="/staff-login" className="bg-gradient-to-br from-[#6D9EE0] to-[#4C7FAE] p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-sm cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="bg-white text-[#4C7FAE] p-4 rounded-full mb-4 text-3xl">
            <FaBolt />
          </div>
          <h2 className="text-3xl font-bold mb-2">Staff</h2>
          <p className="text-gray-200 mb-4">Daily operations management</p>
          <button className="bg-white text-[#4C7FAE] px-8 py-3 rounded-full font-semibold text-lg flex items-center">
            <FaBolt className="mr-3" />
            <span>Staff Login</span>
            <span className="ml-3">&gt;</span>
          </button>
        </a>

        <a href="/resident-login" className="bg-gradient-to-br from-[#6DE08A] to-[#4CAE7F] p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-sm cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="bg-white text-[#4CAE7F] p-4 rounded-full mb-4 text-3xl">
            <FaHome />
          </div>
          <h2 className="text-3xl font-bold mb-2">Resident</h2>
          <p className="text-gray-200 mb-4">Access personal services</p>
          <button className="bg-white text-[#4CAE7F] px-8 py-3 rounded-full font-semibold text-lg flex items-center">
            <FaHome className="mr-3" />
            <span>Resident Login</span>
            <span className="ml-3">&gt;</span>
          </button>
        </a>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm">
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">🔒</span>
          <span>SSL 256-bit Security</span>
        </div>
        <div className="flex items-center">
          <span className="text-blue-400 mr-2">🏢</span>
          <span>500+ Trusted Condominiums</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 mr-2">⭐</span>
          <span>5 Star Rating</span>
          <span className="text-yellow-400 ml-1">⭐</span>
          <span>from Customers</span>
        </div>
      </div>
    </div>
  );
};

export default LoginTemp;
