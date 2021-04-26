import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const ImageByType = (type) => {
  switch (type) {
    case "facebook":
      return <FaFacebookF />;

    case "instagram":
      return <FaInstagram />;
  }

  return <FaFacebookF />;
};
