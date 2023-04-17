import { Routes, Route } from "react-router";

import HomePage from "components/home-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
