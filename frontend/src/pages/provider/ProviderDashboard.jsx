import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardCard from "../../components/dashboard/DashboardCard";
import DashboardGrid from "../../components/dashboard/DashboardGrid";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions";

export default function ProviderDashboard() {
  const navigate = useNavigate();

const sidebarItems = [
  {
    label: "Dashboard",
    path: "/provider/dashboard",
  },
  {
    label: "Profile",
    path: "/provider/profile",
  },
  {
    label: "My Services",
    path: "/services",
  },
  {
    label: "Orders",
    path: "/orders",
  },
  {
    label: "Messages",
    path: "/messages",
  },
  {
    label: "Reviews",
    path: "/reviews",
  },
  {
    label: "Logout",
    path: "/login",
  },
];

  const quickActions = [
    {
      label: "Edit Profile",
      onClick: () => navigate("/provider/profile"),
    },

    {
      label: "Add Service",
      onClick: () => navigate("/services/create"),
    },

    {
      label: "View Orders",
      onClick: () => navigate("/orders"),
    },

    {
      label: "Messages",
      onClick: () => navigate("/messages"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader title="Provider Dashboard" />

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar menuItems={sidebarItems} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome */}
          <WelcomeBanner />

          {/* Quick Actions */}
          <QuickActions actions={quickActions} />

          {/* Dashboard Cards */}
          <div className="mt-8">
            <DashboardGrid>
              <DashboardCard
                title="My Services"
                description="Create and manage the services you offer."
                icon="✂️"
                onClick={() => navigate("/services")}
              />

              <DashboardCard
                title="Incoming Orders"
                description="View customer bookings and requests."
                icon="📦"
                onClick={() => navigate("/orders")}
              />

              <DashboardCard
                title="Messages"
                description="Communicate with customers."
                icon="💬"
                onClick={() => navigate("/messages")}
              />

              <DashboardCard
                title="Reviews"
                description="Check customer feedback."
                icon="⭐"
                onClick={() => navigate("/reviews")}
              />

              <DashboardCard
                title="Profile"
                description="Update your business information."
                icon="👤"
                onClick={() => navigate("/provider/profile")}
              />

              <DashboardCard
                title="Earnings"
                description="Track your completed jobs and income."
                icon="💰"
              />
            </DashboardGrid>
          </div>
        </main>
      </div>
    </div>
  );
}