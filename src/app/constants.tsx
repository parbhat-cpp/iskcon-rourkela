import { FaFacebookF } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

export const SOCIALS: Record<string, Record<string, string | React.ReactNode>> = {
    facebook: {
        link: "https://www.facebook.com/iskconrkl/",
        icon: <FaFacebookF />,
    },
    youtube: {
        link: "https://www.youtube.com/@iskconrourkela3476/featured",
        icon: <SiYoutubekids />,
    },
    instagram: {
        link: "https://www.instagram.com/rourkela_iskcon/",
        icon: <GrInstagram />,
    },
}
