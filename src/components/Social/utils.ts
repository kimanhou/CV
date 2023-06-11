import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SocialMediaEnum } from "./SocialIcon";

export function getIconDefinition(media: SocialMediaEnum) {
    switch (media) {
        case SocialMediaEnum.GITHUB:
            return faGithub;
        case SocialMediaEnum.LINKEDIN:
            return faLinkedinIn;
        case SocialMediaEnum.MAIL:
            return faEnvelope;
        default:
            return faEnvelope;
    }
}

export function getLink(media: SocialMediaEnum) {
    switch (media) {
        case SocialMediaEnum.GITHUB:
            return "https://github.com/kimanhou";
        case SocialMediaEnum.LINKEDIN:
            return "https://www.linkedin.com/in/kanguyenlu/";
        case SocialMediaEnum.MAIL:
            return "mailto:kanguyenlu@gmail.com";
        default:
            return "mailto:kanguyenlu@gmail.com";
    }
}

export function getMessage(media: SocialMediaEnum) {
    switch (media) {
        case SocialMediaEnum.GITHUB:
            return "/kimanhou";
        case SocialMediaEnum.LINKEDIN:
            return "/kanguyenlu/";
        case SocialMediaEnum.MAIL:
            return "kanguyenlu@gmail.com";
        default:
            return "kanguyenlu@gmail.com";
    }
}
