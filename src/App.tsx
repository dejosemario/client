import ThemeProvider from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import HomePage from "./pages/private/home";
import PublicLayout from "./layouts/public.layout";
import PrivateLayout from "./layouts/private.layout";
// import CreateEvent from "./pages/creator/event/create/index";
import EventsPage from "./pages/event";
import EditEventPage from "./components/molecules/EditEventPage";
import EventCreate from "./components/molecules/EventCreate";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateLayout>
                <HomePage />
              </PrivateLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <RegisterPage />
              </PublicLayout>
            }
          />
          <Route
            path="/login"
            element={
              <PublicLayout>
                <LoginPage />
              </PublicLayout>
            }
          />
          <Route
            path="/creator/events"
            element={
              <PrivateLayout>
                <EventsPage />
              </PrivateLayout>
            }
          />

          <Route
            path="/creator/events/create"
            element={
              <PrivateLayout>
                 <EventCreate />
            </PrivateLayout>
            }
          />
          <Route
            path="/creator/events/edit/:id"
            element={
              <PrivateLayout>
                <EditEventPage />
              </PrivateLayout>
            }
          />
          <Route
            path="/creator/bookings"
            element={
              <PrivateLayout>
                <EditEventPage />
              </PrivateLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
