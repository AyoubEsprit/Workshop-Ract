// router.jsx

import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout";
import AddEvent from "./Components/AddEvent";
import UpdateEvent from "./Components/UpdateEvent";

const Events = lazy(() => import("./Components/Events"));
const EventDetails = lazy(() => import("./components/EventDetails"));
const NotFound = lazy(() => import("./components/NotFound"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Events />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
  path: "events/:id",
  element: <EventDetails />
},
      {
        path: "add",
        element: <AddEvent />
      },
      {
  path: "update/:id",
  element: <UpdateEvent />
},
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
