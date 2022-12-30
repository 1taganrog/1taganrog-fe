import {Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/album/:albumId" element={<></>} />
      <Route path="/museum/:museumId" element={<></>} />
      <Route path="/industry/:industryId" element={<></>} />
      <Route path="*" element={<></>} />
    </Routes>
  )
}