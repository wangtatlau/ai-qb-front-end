import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import QuestionPage from "./pages/Question";
import DashboardPage from "./pages/Dashboard";
import CreateQuestionPage from "./pages/CreateQuestion";
import Layout from "./components/layout/Layout";
import styles from "./index.css"
// import SignUpPage from "./pages/SignUp";
import LogInPage from "./pages/LogIn";
// import DashboardPage from "./pages/Dashboard";
// import BrowsePage from "./pages/Browse";
// import QuestionPage from "./pages/Question";
// import CreateQuestionPage from "./pages/CreateQuestion";
// import Layout from "./components/layout/Layout";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/signup" element={<SignUpPage />} />
        
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/create-question" element={<CreateQuestionPage />} /> */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/create-question" element={<CreateQuestionPage />} />
      </Routes>

  );
}

export default App;