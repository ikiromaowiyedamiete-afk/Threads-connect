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

    "Dashboard",
    "Profile",
    "My Services",
    "Orders",
    "Messages",
    "Reviews",
    "Logout"

  ];


  const quickActions = [

    {
      label: "Edit Profile",
      onClick: () => navigate("/profile")
    },


    {
      label: "Add Service",
      onClick: () => navigate("/services/create")
    },


    {
      label: "View Orders",
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
        title="Provider Dashboard"
      />



      <div className="flex">


        {/* Sidebar */}

        <DashboardSidebar
          menuItems={sidebarItems}
        />



        {/* Content */}

        <main className="flex-1 p-6">


          {/* Welcome */}

          <WelcomeBanner />



          {/* Quick Buttons */}

          <QuickActions
            actions={quickActions}
          />



          {/* Provider Features */}

          <div className="mt-8">


            <DashboardGrid>



              <DashboardCard

                title="My Services"

                description="
                Create and manage the services
                you offer.
                "

                icon="✂️"

                onClick={() =>
                  navigate("/services")
                }

              />



              <DashboardCard

                title="Incoming Orders"

                description="
                View customer bookings and requests.
                "

                icon="📦"

                onClick={() =>
                  navigate("/orders")
                }

              />



              <DashboardCard

                title="Messages"

                description="
                Communicate with customers.
                "

                icon="💬"

                onClick={() =>
                  navigate("/messages")
                }

              />



              <DashboardCard

                title="Reviews"

                description="
                Check customer feedback.
                "

                icon="⭐"

                onClick={() =>
                  navigate("/reviews")
                }

              />



              <DashboardCard

                title="Profile"

                description="
                Update your business information.
                "

                icon="👤"

                onClick={() =>
                  navigate("/profile")
                }

              />



              <DashboardCard

                title="Earnings"

                description="
                Track your completed jobs and income.
                "

                icon="💰"

              />



            </DashboardGrid>


          </div>



        </main>



      </div>



    </div>

  );
}