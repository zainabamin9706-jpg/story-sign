import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContext } from "./hooks/context/context";
import ForgotPassword from "./screens/authentication/forgotPassword";
import LoginPage from "./screens/authentication/loginPage";
import NewPassword from "./screens/authentication/newPassword";
import OTP from "./screens/authentication/otp";
import AuthorDetailView from "./screens/authorManagement/authorDetailView";
import AuhtorManagement from "./screens/authorManagement/authorManagement";
import AutographFee from "./screens/autographFee/autographFee";
import UpdatedFee from "./screens/autographFee/updatedFee";
import AutographRequest from "./screens/autographRequest/autographRequest";
import Dashboard from "./screens/Dashboard/dashboard";
import EbookManagement from "./screens/ebookManagement/ebookManagement";
import EbookRequest from "./screens/ebookManagement/ebookRequest";
import AddFaq from "./screens/faq/addFaq";
import EditFAQ from "./screens/faq/editFAQ";
import FAQ from "./screens/faq/faq";
import AddNotification from "./screens/notifications/addNotification";
import NotificationManagement from "./screens/notifications/notificationManagement";
import AddPolicy from "./screens/privacyPolicy/addPolicy";
import EditPolicy from "./screens/privacyPolicy/editPolicy";
import PrivacyPolicy from "./screens/privacyPolicy/Privacy";
import Profile from "./screens/profile/profile";
import Queries from "./screens/queryManagement/queries";
import ReaderDetailView from "./screens/readerManagement/readerDetailView";
import ReaderManagement from "./screens/readerManagement/readerManagement";
import ReportAnalytics from "./screens/report&analytics/reportAnalytics";
import AddPlan from "./screens/subscriptionPlan/addPlan";
import SubscriptionPlan from "./screens/subscriptionPlan/SusbscriptionPlan";
import Request from "./screens/autographRequest/request";
import Settings from "./screens/settings/settings";
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoutes>
          {" "}
          <LoginPage />
        </PublicRoutes>
      ),
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/otp",
      element: <OTP />,
    },
    {
      path: "/new-password",
      element: <NewPassword />,
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      ),
    },
    { path: "/reader-management", element: <ReaderManagement /> },
    { path: "/reader-detail-view", element: <ReaderDetailView /> },
    { path: "/author-management", element: <AuhtorManagement /> },
    {
      path: "/author-detail-view",
      element: <AuthorDetailView />,
    },
    {
      path: "/autograph-request",
      element: <AutographRequest />,
    },
    {
      path: "/request/:id",
      element: <Request />,
    },
    {
      path: "/ebook-management",
      element: <EbookManagement />,
    },
    {
      path: "/ebook-request/:id",
      element: <EbookRequest />,
    },
    {
      path: "/subscription",
      element: <SubscriptionPlan />,
    },
    {
      path: "/add-plan",
      element: <AddPlan />,
    },

    {
      path: "/autograph-fee",
      element: <AutographFee />,
    },
    {
      path: "/updated-fee",
      element: <UpdatedFee />,
    },
    {
      path: "/notification-management",
      element: <NotificationManagement />,
    },
    {
      path: "/add-notification",
      element: <AddNotification />,
    },
    {
      path: "/queries",
      element: <Queries />,
    },
    {
      path: "/report-analytics",
      element: <ReportAnalytics />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/add-policy",
      element: <AddPolicy />,
    },
    {
      path: "/edit-policy/:id",
      element: <EditPolicy />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/faqs",
      element: <FAQ />,
    },
    {
      path: "/add-faq",
      element: <AddFaq />,
    },
    {
      path: "/edit-faq/:id",
      element: <EditFAQ />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <AppContext.Provider value={{ email, setEmail, password, setPassword }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};

export default App;
