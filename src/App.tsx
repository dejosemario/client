import ThemeProvider from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import HomePage from "./pages/private/home";
import PublicLayout from "./layouts/public.layout";
import PrivateLayout from "./layouts/private.layout";
import EventsPage from "./pages/event";
import EditEventPage from "./components/organisms/EditEventPage";
import EventCreate from  "./components/organisms/EventCreate";
import EventInfoPage from "./components/organisms/EventInfoPage";
import UserBookingsPage from "./components/organisms/UserBookingsPage";
import ProfilePage from "./pages/profile";
import Attendees from "./pages/attendees";
import Analytics from "./pages/analytics";
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
            path="/events/:id"
            element={
              <PrivateLayout>
                <EventInfoPage />
              </PrivateLayout>
            }
          />   
             <Route
            path="/profile"
            element={
              <PrivateLayout>
                <ProfilePage />
              </PrivateLayout>
            }
          />   
          <Route
            path="/profile/bookings"
            element={
              <PrivateLayout>
                <UserBookingsPage />
              </PrivateLayout>
            }
          />
          <Route 
           path="/creator/attendees"
           element = {
            <PrivateLayout>
              <Attendees />
            </PrivateLayout>
           }
          />
          <Route 
           path="/creator/analytics"
           element = {
            <PrivateLayout>
              <Analytics />
            </PrivateLayout>
           }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
