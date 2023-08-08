// Admin Imports
import Bms from "views/admin/bms";
import MainDashboard from "views/admin/default";
import Pcs from "views/admin/pcs";

// Auth Imports

// Icon Imports
import { MdHome, MdOutlineChargingStation } from "react-icons/md";

const routes = [
  {
    name: "電網系統",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "電池管理BMS",
    layout: "/admin",
    icon: <MdOutlineChargingStation className="h-6 w-6" />,
    path: "bms",
    component: <Bms />,
  },
  {
    name: "電力轉換器PCS",
    layout: "/admin",
    icon: <MdOutlineChargingStation className="h-6 w-6" />,
    path: "pcs",
    component: <Pcs />,
  },
  // {
  //   name: "備用控制台",
  //   layout: "/admin",
  //   path: "backup",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <BackupDashboard />,
  // },
  // {
  //   name: "Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
