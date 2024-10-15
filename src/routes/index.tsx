import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

import { LoggedLayout } from "@src/components/layouts/LoggedLayout";
import { ProfilePage } from "@src/modules/profile/screens/profile";
import { EditInformationsPage } from "@src/modules/profile/screens/edit-informations";
import { NotFound } from "@src/modules/profile/screens/not-found";
import { PreferencesPage } from "@src/modules/profile/screens/preferences";
import { InviteFriendPage } from "@src/modules/profile/screens/invite-friend";
import FullScreenLoader from "@src/components/FullScreenLoader";

const OnboardingPage = lazy(() => import("../modules/onboarding/screens"));
const ChatPage = lazy(() => import("../modules/chat/screens/chat"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<OnboardingPage />} />
          </Route>
          <Route element={<LoggedLayout />}>
            <Route path="chat" element={<ChatPage />} />
            <Route path="profile">
              <Route index element={<ProfilePage />} />
              <Route path="preferences" element={<PreferencesPage />} />
              <Route
                path="edit-information"
                element={<EditInformationsPage />}
              />
              <Route path="invite-friend" element={<InviteFriendPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
