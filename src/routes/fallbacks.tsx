import { NotFound } from "../modules/profile/screens/not-found";

export const fallbackRoute = [
  {
    path: "*",
    element: <NotFound />,
  },
];
