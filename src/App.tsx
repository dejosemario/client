import ThemeProvider from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import HomePage from "./pages/private/home";
import PublicLayout from "./layouts/public.layout";
import PrivateLayout from "./layouts/private.layout";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateLayout><HomePage /></PrivateLayout>} />
          <Route path="/register" element={<PublicLayout><RegisterPage /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
