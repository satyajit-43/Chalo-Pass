import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChaloBus from "./components/LandingSite/ChaloBus/index";
import LandingSite from "./components/LandingSite/Index";
import LandingPage from "./components/LandingSite/HomePage/index"
import Auth from "./components/LandingSite/AuthPage/Index";
import SignIn from "./components/LandingSite/AuthPage/SignIn";
import ChaloCard from "./components/LandingSite/ChaloCard/ChaloCard";

// import Index from "./components/Dashboards/Dashboard/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingSite />}>
          <Route index element={<LandingPage />} />
          <Route path="facility" element={<ChaloCard />} />
          <Route path="contact" element={<ChaloBus />} />
          <Route path="auth" element={<Auth />}>
            <Route index element={<SignIn />} />
            <Route path="login" element={<SignIn />} />
          </Route>
        </Route>
        {/* <Route path="/dashboard" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="mess" element={<Mess />  } />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="complaints" element={<Complaints/>} />
          <Route path="suggestions" element={<Suggestions/>} />
          <Route path="leave-form" element={<LeaveForm/>} />
          <Route path="notice-board" element={<Notices/>} />
          <Route path="room-allocation" element={<RoomAllocation/>} />
          <Route path="invoices" element={<Invoices/>} />
          <Route path="settings" element={<Settings/>} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
