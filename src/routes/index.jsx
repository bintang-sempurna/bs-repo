import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import NavbarBs from "../layouts/NavbarBs";
import TentangKami from "../pages/profile/TentangKami";
import AwardPage from "../pages/profile/Awards";
import TestimoniPage from "../pages/profile/Testimoni";
import MainPage from "../pages/main";
import HubungiKami from "../pages/profile/Hubungi";
import EventsPage from "../pages/events/eventsPage";
import EventRecap from "../pages/events/eventsRecapPages";
import Product from "../pages/product";
import TechnologyPage from "../pages/insight/Technology";
import KnowledgePage from "../pages/insight/Knowledge";
import BlogPage from "../pages/insight/Blog";
import BlogDetails from "../pages/insight/BlogDetail";
import store from "../store";
import RecapDetails from "../pages/events/recapDetails";
import ProductDetails from "../pages/product/detail";
import TechnologyDetails from "../pages/insight/Technology/TecnologyDetails";
import TestiDetail from "../components/statik/testimoni/Details";
import DetailsAward from "../components/awardPage/DetailsAward";
import NotFound from "../components/notFount";
import KnowledDetail from "../components/KnowledgeDetail";

const router = createBrowserRouter([
  {
    path: "/",

    element: <NavbarBs />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/profile/tentang",
        element: <TentangKami />,
      },
      {
        path: "/profile/award",
        element: <AwardPage />,
      },
      {
        path: "/profile/award/:id",
        element: <DetailsAward />,
      },

      {
        path: "/profile/testimoni",
        element: <TestimoniPage />,
      },
      {
        path: "/profile/testimoni/:id",
        element: <TestiDetail />,
      },
      {
        path: "/profile/hubungikami",
        element: <HubungiKami />,
      },
      {
        path: "/events/now",
        element: <EventsPage />,
      },
      {
        path: "/events/recap",
        element: <EventRecap />,
      },
      // {
      //   path: "/events/q&a",
      //   element: <QnaEvents />,
      // },
      // details Event Recap
      {
        path: "/events/recap/:id",
        element: <RecapDetails />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      // details Product & service
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/insight/technology",
        element: <TechnologyPage />,
      },

      {
        path: "/insight/technology/:id",
        element: <TechnologyDetails />,
      },

      {
        path: "/insight/knowledge",
        element: <KnowledgePage />,
      },
      {
        path: "/insight/knowledge:id",
        element: <KnowledDetail />,
      },
      {
        path: "/insight/blog",
        element: <BlogPage />,
      },
      // details blog
      {
        path: "/insight/blog/:id",
        element: <BlogDetails />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const RestRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default RestRouter;
