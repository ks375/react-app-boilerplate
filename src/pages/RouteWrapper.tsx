import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContainer from "./dashboard";

const RouteWrapper: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardContainer />} />
      </Routes>
    </Router>
  );
};

export default RouteWrapper;