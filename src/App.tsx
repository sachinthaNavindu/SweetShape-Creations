import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/AuthPage";
import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />

        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
