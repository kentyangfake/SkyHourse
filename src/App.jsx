import { Navigate, Route, Routes } from "react-router-dom";

import AdminLayout from "layouts/admin";
const App = () => {
  return (
    <Routes>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="admin/*" element={<AdminLayout />} />
      {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
