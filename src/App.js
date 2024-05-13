
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import Creditcards from "./pages/Creditcards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Setting from "./pages/Setting";
import Edit from "./components/settings/Edit";
import Preferences from "./components/settings/Preferences";
import Security from "./components/settings/Security";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
    {
      path: "/accounts",
      element: <Accounts />,
    },
    {
      path: "/investments",
      element: <Investments />,
    },
    {
      path: "/creditcards",
      element: <Creditcards />,
    },
    {
      path: "/loans",
      element: <Loans />,
    },
    {
      path: "/services",
      element: <Services/>,
    },
    {
      path: "/settings",
      element: <Setting/>,
      children: [
        {
          path: "",
          element: <Edit />,
        },
        {
          path: "preferences",
          element: <Preferences />,
        },
        {
          path: "security",
          element: <Security />,
        },
      ],
    },
    
  ]);
  return (
    <div className="">
   
       
        <RouterProvider router={router} />
       

    </div>
  );
}

export default App;
