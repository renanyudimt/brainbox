import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { OnboardingPage } from "../modules/onboarding/screens";
import { ChatPage } from "../modules/chat/screens/chat";
import { LoggedLayout } from "@src/components/layouts/LoggedLayout";
import { ProfilePage } from "@src/modules/profile/screens/profile";
import { NotFound } from "@src/modules/profile/screens/not-found";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<OnboardingPage />} />
        </Route>
        <Route element={<LoggedLayout />}>
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile">
            <Route index element={<ProfilePage />} />
            <Route path="preferences" element={<ProfilePage />} />
            <Route path="edit-information" element={<ProfilePage />} />
            <Route path="invite-friends" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
