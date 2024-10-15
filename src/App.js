import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoardPage from "./Pages/DashBoardPage";
import Userprofile from "./Pages/UsersProfile";
import NotificationPage from "./Pages/NotificationPage";
import { useSelector } from "react-redux";
import RegisterPage from "../src/Pages/Authentication/RegisterPage";
import LoginPage from "./Pages/Authentication/LoginPage";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s", // Smooth transition
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<DashBoardPage />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashBoard" element={<DashBoardPage />} />
          </Route>
          <Route path="/userprofile" exact element={<Userprofile />}></Route>
          <Route path="/activity" exact element={<NotificationPage />}></Route>
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
