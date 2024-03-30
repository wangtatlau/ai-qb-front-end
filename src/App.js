import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import HomePage from "./pages/Home";
import QuestionPage from "./pages/Question";
import DashboardPage from "./pages/Dashboard";
import CreateQuestionPage from "./pages/CreateQuestion";
import ReviewPage from "./pages/Review";
import BrowseQuestion from "./pages/BrowseQuestion";
import Toc from "./pages/Toc";
import styles from "./index.css"
import LogInPage from "./pages/LogIn";
import ProtectedRoute from "./ProtectedRoute";
// import DashboardPage from "./pages/Dashboard";
// import BrowsePage from "./pages/Browse";
// import QuestionPage from "./pages/Question";
// import CreateQuestionPage from "./pages/CreateQuestion";
// import Layout from "./components/layout/Layout";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/toc" element={<Toc />} />
        
        <Route path="/browse-question" element={<BrowseQuestion />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/create-question" element={<CreateQuestionPage />} />

        {/* <Route path="/browse-question" element={<ProtectedRoute><BrowseQuestion /></ProtectedRoute>} />
        <Route path="/review" element={<ProtectedRoute><ReviewPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/question" element={<ProtectedRoute><QuestionPage /></ProtectedRoute>} />
        <Route path="/create-question" element={<ProtectedRoute><CreateQuestionPage /></ProtectedRoute>} /> */}
      </Routes>

  );
}

export default App;