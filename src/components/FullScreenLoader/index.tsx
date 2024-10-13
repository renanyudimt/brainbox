import { Image } from "@chakra-ui/react";
import "./styles.css";

export const FullScreenLoader = () => (
  <div
    className="loader"
    style={{
      backgroundColor: `#02023C`,
    }}
  >
    <Image
      alt="logo do makes"
      height={40}
      src="/assets/brand/logo_makes_negative.svg"
      width={192}
    />
  </div>
);

export default FullScreenLoader;
