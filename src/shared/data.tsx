
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";

export const rightLinks = [
    {
        name: 'LOGIN',
        link: '#',
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        name: "REGISTRATION",
        link: "#",
        icon: <FontAwesomeIcon icon={faPen} />
    }
]
export const mobileLinks = [
    {
        name: 'DASHBOARD',
        link: '/',
    },
    {
        name: "CONTACT",
        link: "/contact",
    },
    {
        name: 'LOGIN',
        link: '#',
    },
    {
        name: "REGISTRATION",
        link: "#",
    }
]