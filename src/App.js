import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import HomePage from "./pages/Home";
import QuestionPage from "./pages/Question";
import DashboardPage from "./pages/Dashboard";
import CreateQuestion from "./pages/CreateQuestion";
import ReviewPage from "./pages/Review";
import BrowseQuestion from "./pages/BrowseQuestion";
import SavedQuestion from "./pages/SavedQuestion";
import Settings from "./pages/Settings";
import ChangePassword from "./pages/ChangePassword";
import Toc from "./pages/Toc";
import styles from "./index.css";
import LogInPage from "./pages/LogIn";
import PersonalDetails from "./pages/PersonalDetails";
import ProtectedRoute from "./ProtectedRoute";
import EmptyPage from "./components/ui/EmptyPage";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/toc" element={<Toc />} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        {/* <Route path="/saved" element={<ProtectedRoute><SavedQuestion /></ProtectedRoute>} /> */}
        <Route path="/saved" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
        <Route path="/browse-question" element={<ProtectedRoute><BrowseQuestion /></ProtectedRoute>} />
        <Route path="/review" element={<ProtectedRoute><ReviewPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/question" element={<ProtectedRoute><QuestionPage /></ProtectedRoute>} />
        <Route path="/create-question" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
        <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        <Route path="/personal-details" element={<ProtectedRoute><PersonalDetails /></ProtectedRoute>} />
        <Route path="/performance" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
      </Routes>

  );
}

export default App;