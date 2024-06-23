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
import PublicRoute from "./PublicRoute";
import EmptyPage from "./components/ui/EmptyPage";
import Feedback from "./pages/Feedback";

function App() {
  const recordTimeStampDeck = async (deckId, buttonId) => {
    const timestamp = new Date().toISOString();
    const data = { deckId, buttonId, timestamp };
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const response = await fetch('https://secure-backend-qvault.com/deck-button', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Success:');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const recordTimeStamp = async (buttonId) => {
    const timestamp = new Date().toISOString();
    const data = { buttonId, timestamp };
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const response = await fetch('https://secure-backend-qvault.com/general-button', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Success:');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
      <Routes>
        <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LogInPage /></PublicRoute>} />
        <Route path="/toc" element={<Toc />} />
        <Route path="/settings" element={<ProtectedRoute><Settings recordTimeStamp={recordTimeStamp} /></ProtectedRoute>} />
        {/* <Route path="/saved" element={<ProtectedRoute><SavedQuestion /></ProtectedRoute>} /> */}
        {/* <Route path="/saved" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} /> */}
        <Route path="/browse-question" element={<ProtectedRoute><BrowseQuestion recordTimeStamp={recordTimeStamp} recordTimeStampDeck={recordTimeStampDeck} /></ProtectedRoute>} />
        <Route path="/review" element={<ProtectedRoute><ReviewPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage recordTimeStamp={recordTimeStamp} /></ProtectedRoute>} />
        <Route path="/question" element={<ProtectedRoute><QuestionPage /></ProtectedRoute>} />
        {/* <Route path="/create-question" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} /> */}
        <Route path="/change-password" element={<ProtectedRoute><ChangePassword recordTimeStamp={recordTimeStamp} /></ProtectedRoute>} />
        <Route path="/personal-details" element={<ProtectedRoute><PersonalDetails recordTimeStamp={recordTimeStamp} /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Feedback recordTimeStamp={recordTimeStamp} /></ProtectedRoute>} />
        {/* <Route path="/performance" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><EmptyPage /></ProtectedRoute>} /> */}
      </Routes>

  );
}

export default App;