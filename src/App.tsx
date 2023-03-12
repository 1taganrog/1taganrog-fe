import React from "react";
import {RouterProvider} from "react-router-dom";
import HomePageRoot from "./pages/HomePage";
import {
  createBrowserRouter,
} from "react-router-dom";
import AlbumPageRoot from "./pages/AlbumPage";
import MuseumPageRoot from "./pages/MuseumPage";
import IndustryPageRoot from "./pages/IndustryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoot />,
  },
  {path: "/album/:albumId", element: <AlbumPageRoot />},
  {path: '/museum/:museumId', element: <MuseumPageRoot />},
  {path: '/industry/:industryId', element: <IndustryPageRoot />},
  {path: '*', element: <HomePageRoot />},

]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}