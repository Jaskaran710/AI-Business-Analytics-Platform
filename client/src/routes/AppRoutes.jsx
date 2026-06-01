import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Upload from "../pages/Upload";
import AIInsights from "../pages/AIInsights";
import AskData from "../pages/AskData";
import ChatHistory from "../pages/ChatHistory";
import ProtectedRoute from "../components/ProtectedRoute";
import DatasetHistory from "../pages/DatasetHistory";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

<Route
  path="/"
  element={<LandingPage />}
/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-insights"
          element={
            <ProtectedRoute>
              <AIInsights />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ask-data"
          element={
            <ProtectedRoute>
              <AskData />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat-history"
          element={
            <ProtectedRoute>
              <ChatHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dataset-history"
          element={
            <ProtectedRoute>
              <DatasetHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>

  );

};

export default AppRoutes;