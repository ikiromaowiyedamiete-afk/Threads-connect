import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardCard from "../../components/dashboard/DashboardCard";
import DashboardGrid from "../../components/dashboard/DashboardGrid";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions";


export default function CustomerDashboard() {

  const navigate = useNavigate();


  const sidebarItems = [
    "Dashboard",
    "Profile",
    "Browse Providers",
    "Orders",
    "Messages",
    "Reviews",
    "Logout"
  ];


  const quickActions = [

    {
      label: "Browse Providers",
      onClick: () => navigate("/providers")
    },

    {
      label: "Edit Profile",
      onClick: () => navigate("/profile")
    },

    {
      label: "My Orders",
      onClick: () => navigate("/orders")
    },

    {
      label: "Messages",
      onClick: () => navigate("/messages")
    }

  ];


  return (

    <div className="min-h-screen bg-gray-50">


      {/* Header */}
      <DashboardHeader 
        title="Customer Dashboard"
      />


      <div className="flex">


        {/* Sidebar */}
        <DashboardSidebar 
          menuItems={sidebarItems}
        />


        {/* Main Content */}
        <main className="
          flex-1
          p-6
        ">


          {/* Welcome */}
          <WelcomeBanner />


          {/* Actions */}
          <QuickActions 
            actions={quickActions}
          />


          {/* Cards */}
          <div className="mt-8">

            <DashboardGrid>


              <DashboardCard
                title="Browse Providers"
                description="Find skilled tailors and service providers."
                icon="🧵"
                onClick={() => navigate("/providers")}
              />


              <DashboardCard
                title="My Orders"
                description="Track your bookings and orders."
                icon="📦"
                onClick={() => navigate("/orders")}
              />


              <DashboardCard
                title="Messages"
                description="Chat with your service providers."
                icon="💬"
                onClick={() => navigate("/messages")}
              />


              <DashboardCard
                title="Reviews"
                description="Rate and review completed services."
                icon="⭐"
                onClick={() => navigate("/reviews")}
              />


              <DashboardCard
                title="Profile"
                description="Update your personal information."
                icon="👤"
                onClick={() => navigate("/profile")}
              />


              <DashboardCard
                title="Settings"
                description="Manage your account settings."
                icon="⚙️"
              />


            </DashboardGrid>


          </div>


        </main>


      </div>


    </div>

  );
}