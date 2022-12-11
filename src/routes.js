// App Name UI Dashboard React layouts
import Settings from "layouts/settings";
import Calendar from "layouts/calendar";
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// App Nmae UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <CreditCard size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <Shop size="12px" />,
    component: <Settings />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    route: "/calendar",
    icon: <Office size="12px" />,
    component: <Calendar />,
    noCollapse: true,
  },
];

export default routes;
