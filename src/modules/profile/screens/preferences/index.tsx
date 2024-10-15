import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import UserSvgLight from "@src/assets/icons/light/user.svg";
import UserSvgDark from "@src/assets/icons/dark/user.svg";
import EyeSvgLight from "@src/assets/icons/light/eye.svg";
import EyeSvgDark from "@src/assets/icons/dark/eye.svg";
import WalletSvgLight from "@src/assets/icons/light/wallet.svg";
import WalletSvgDark from "@src/assets/icons/dark/wallet.svg";
import PenSvgLight from "@src/assets/icons/light/pen.svg";
import PenSvgDark from "@src/assets/icons/dark/pen.svg";
import SettingsSvgLight from "@src/assets/icons/light/settings.svg";
import SettingsSvgDark from "@src/assets/icons/dark/settings.svg";
import { PreferenceButton } from "./components/PreferenceButton";
import { useNavigate } from "react-router-dom";

export const PreferencesPage = () => {
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();
  const accountImage = useColorModeValue(UserSvgLight, UserSvgDark);
  const eyesImage = useColorModeValue(EyeSvgLight, EyeSvgDark);
  const walletImage = useColorModeValue(WalletSvgLight, WalletSvgDark);
  const penImage = useColorModeValue(PenSvgLight, PenSvgDark);
  const settingsImage = useColorModeValue(SettingsSvgLight, SettingsSvgDark);

  return (
    <Flex flexDir="column" flex={1} gap={8} mt={32}>
      <PreferenceButton
        title="Account Information"
        subtitle="Change your account information"
        icon={accountImage}
        onClick={() => navigate(`/profile/edit-information`)}
      />

      <PreferenceButton
        title="Password"
        subtitle="Change your password"
        icon={eyesImage}
      />

      <PreferenceButton
        title="Payment Methods"
        subtitle="Add Your Credit / Credit Cards"
        icon={walletImage}
      />

      <PreferenceButton
        title="Invite Your Friends"
        subtitle="Get $3 for each invitation!"
        icon={penImage}
        onClick={() => navigate(`/profile/invite-friend`)}
      />
      <PreferenceButton
        title="Theme Colour"
        subtitle="Change your theme colour"
        icon={settingsImage}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
