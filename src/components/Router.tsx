import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostList from "./PostList";
import Profile from "./Profile";

export default function Router() {
  return(
  <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/posts" element={<PostList/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<Navigate replace to="/"/>} />
    </Routes>
  </>
  )
}



