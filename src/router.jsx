import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./layouts/RootLayout";
import AddEvent from "./Components/AddEvent";
import UpdateEvent from "./Components/UpdateEvent";

const Events = lazy(() => import("./Components/Events"));
const EventDetails = lazy(() => import("./Components/EventDetails"));
const NotFound = lazy(() => import("./Components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Events />
          </Suspense>
        ),
      },
      {
        path: "events",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Events />
          </Suspense>
        ),
      },
      {
        path: "events/:id",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <EventDetails />
          </Suspense>
        ),
      },
      {
        path: "add",
        element: <AddEvent />,
      },
      {
        path: "update/:id",
        element: <UpdateEvent />,
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;