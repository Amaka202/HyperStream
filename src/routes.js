// App Name UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// App Nmae UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SettingsIcon from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import Goals from "views/Goals/Goals";
import SingleGoal from "views/Goals/SingleGoal";
import Index from "views/Experiment/Index";
import Settings from "views/Settings";
import Calender from "views/Calender";
import SingleGoalGraph from "views/Goals/SingleGoalGraph";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Goals",
    key: "goals",
    route: "/goals",
    icon: <Office size="12px" />,
    component: <Goals />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Calender",
    key: "calander",
    route: "/calander",
    icon: <CreditCard size="12px" />,
    component: <Calender />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Setting",
    key: "setting",
    route: "/setting",
    icon: <SettingsIcon size="12px" />,
    component: <Settings />,
    noCollapse: true,
  },
];

export default routes;
