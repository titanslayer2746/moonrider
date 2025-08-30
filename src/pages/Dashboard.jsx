import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import {
  Search,
  Bell,
  User,
  Home,
  BarChart3,
  Users,
  Settings,
  Plus,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Activity,
  MoreHorizontal,
  X,
  LogOut,
  Heart,
  CreditCard,
  Calendar,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AddProfileModal from "../components/AddProfileModal";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const { signOut } = useAuth();

  const metrics = [
    {
      title: "Total Revenue",
      value: "$2,129,430",
      change: "+2.5%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Transactions",
      value: "1,520",
      change: "+1.7%",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Likes",
      value: "9,721",
      change: "+1.4%",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      title: "Total Users",
      value: "9,721",
      change: "+4.2%",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const chartData = [
    { month: "Jan", guest: 400, user: 500 },
    { month: "Feb", guest: 450, user: 350 },
    { month: "Mar", guest: 300, user: 200 },
    { month: "Apr", guest: 350, user: 400 },
    { month: "May", guest: 280, user: 320 },
    { month: "Jun", guest: 420, user: 380 },
    { month: "Jul", guest: 380, user: 450 },
  ];

  const pieData = [
    { name: "Basic Tees", value: 55, color: "#86efac" },
    { name: "Custom Short Pants", value: 31, color: "#fbbf24" },
    { name: "Super Hoodies", value: 14, color: "#fca5a5" },
  ];

  const COLORS = ["#86efac", "#fbbf24", "#fca5a5"];

  const handleSignOut = () => {
    navigate("/sign-in");
  };

  if (!isLoaded) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6661fd] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#6661fd] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">BASE</h1>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white bg-white/20 rounded-lg"
              >
                <Home size={20} className="mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <CreditCard size={20} className="mr-3" />
                Transactions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Calendar size={20} className="mr-3" />
                Schedules
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Users size={20} className="mr-3" />
                Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Settings size={20} className="mr-3" />
                Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* Help & Contact Section */}
        <div className="px-4 py-2">
          <div className="flex flex-col space-y-2 text-left">
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white/80 transition-colors"
            >
              Help
            </a>
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white/80 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-t border-white/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt={user.fullName || "User"}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <User size={20} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.fullName ||
                  user?.emailAddresses?.[0]?.emailAddress ||
                  "User"}
              </p>
              <p className="text-xs text-white/70 truncate">
                {user?.emailAddresses?.[0]?.emailAddress}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center px-3 py-2 text-sm text-black bg-white hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
          >
            <LogOut size={16} className="mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6661fd] focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="relative p-2 bg-white rounded-lg text-gray-400 hover:text-gray-600">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={user.fullName || "User"}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User size={16} />
                  )}
                </div>
                <span className="text-sm font-medium">
                  {user?.fullName ||
                    user?.emailAddresses?.[0]?.emailAddress ||
                    "User"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-[#6661fd] to-[#8b5cf6] p-6 rounded-xl text-white">
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, {user?.firstName || "User"}! 👋
              </h1>
              <p className="text-white/80">
                Here's what's happening with your account today.
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${metric.bgColor} mr-4`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {metric.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mb-2">
                        {metric.value}
                      </p>
                      <div className="flex justify-end">
                        <span className="text-xs text-green-600 font-medium bg-green-100 px-1.5 py-0.5 rounded-full">
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="space-y-6">
              {/* Activities Chart - Full Width */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Activities
                  </h3>
                  <button className="p-2 bg-white rounded-lg text-gray-600 hover:text-gray-800">
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#6b7280" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#6b7280" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend
                        verticalAlign="top"
                        height={36}
                        wrapperStyle={{ paddingBottom: "20px" }}
                      />
                      <Bar
                        dataKey="guest"
                        fill="#f87171"
                        radius={[4, 4, 0, 0]}
                        name="Guest"
                      />
                      <Bar
                        dataKey="user"
                        fill="#4ade80"
                        radius={[4, 4, 0, 0]}
                        name="User"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bottom Row - Pie Chart and Add Profile */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Products Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-1">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Top products
                      </h3>
                      <p className="text-sm text-gray-600">May - June 2021</p>
                    </div>
                    <button className="p-2 bg-white rounded-lg text-gray-600 hover:text-gray-800">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>

                  <div className="flex items-center">
                    {/* Pie Chart */}
                    <div className="w-32 h-32 mr-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={30}
                            outerRadius={60}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Legend */}
                    <div className="flex-1 space-y-3">
                      {pieData.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div
                            className="w-3 h-3 rounded-full mt-1 mr-2"
                            style={{ backgroundColor: COLORS[index] }}
                          ></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {item.value}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add Profile Card */}
                <div
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setShowModal(true)}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Plus size={24} className="text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Add Profile
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Add New Profile
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 bg-white border border-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab("basic")}
                  className={`flex-1 px-4 py-2 border-b-2 font-medium bg-white ${
                    activeTab === "basic"
                      ? "text-blue-500 border-blue-500"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  Basic
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex-1 px-4 py-2 border-b-2 font-medium bg-white ${
                    activeTab === "contact"
                      ? "text-blue-500 border-blue-500"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  Contact
                </button>
              </div>

              {/* Basic Tab Content */}
              {activeTab === "basic" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                    />
                  </div>
                </div>
              )}

              {/* Contact Tab Content */}
              {activeTab === "contact" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-8">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors bg-white"
                >
                  Back
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
