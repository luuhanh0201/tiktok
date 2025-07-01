import images from "@/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import {
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faQuestion,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import { MessageIcon, NotificationIcon, UploadIcon } from "@/components/Icons";
import Image from "@/components/Image";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "Tiếng Việt",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English", // United States, Canada, Australia, etc.
                },
                {
                    code: "vi",
                    title: "Tiếng Việt", // Vietnam
                },
                {
                    code: "fi",
                    title: "Suomi", // Finland
                },
                {
                    code: "no",
                    title: "Norsk", // Norway
                },
                {
                    code: "se",
                    title: "Svenska", // Sweden
                },
                {
                    code: "dk",
                    title: "Dansk", // Denmark
                },
                {
                    code: "ch",
                    title: "Schweizerdeutsch", // Switzerland (Swiss German)
                },
                {
                    code: "nl",
                    title: "Nederlands", // Netherlands
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: "Feedback nad help",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keybroad",
    },
];

function Header() {
    const [searchValue, setSearchValue] = useState("");
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "@hanh",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coin",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Setting",
            to: "/setting",
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Logo */}
                <img src={images.logo} />
                {/* Search */}
                <HeadlessTippy
                    render={(attrs) => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    visible={searchValue !== ""}
                    interactive={true}
                >
                    <div className={cx("search")}>
                        <input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text"
                            placeholder="Search account and videos"
                            spellCheck={true}
                        />
                        {/* Icon clear */}
                        <FontAwesomeIcon className={cx("clear-icon")} icon={faCircleXmark} size="lg" />
                        {/* Icon loading */}
                        <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} size="lg" />
                        {/* Icon search */}
                        <HeadlessTippy content="Tìm kiếm" placement="bottom">
                            <button className={cx("search-btn")} type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                            </button>
                        </HeadlessTippy>
                    </div>
                </HeadlessTippy>
                {/* Action button */}
                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <UploadIcon height="28" width="28" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon height="28" width="28" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <NotificationIcon height="28" width="28" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                onClick={() => {
                                    alert("click");
                                }}
                            >
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                alt="Lưu Hạnh"
                                src=".https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/472111998_3829560317292102_3046265317876554402_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=3ZsVEmnsVDgQ7kNvwG4tc5S&_nc_oc=AdmlAJzPv9OwWvSrErlBXUyYYStxQM-4QFHfhXpvlPrcXDIbq6eRoRPR-5IfN4NU8JuWZHFCYAoodwHVkliQc0Rv&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=CVU_lmp-4GIkmzZlrR8d_g&oh=00_AfOtedQ0q3oN18gw-M1MEs-YoKe3jm-F-E_WI8zhYE-huw&oe=6869DAF4"
                                fallback="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/514280371_122258777396029938_4742324996503497420_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=p526x296&_nc_cat=1&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=7bE0Dn-DxhYQ7kNvwE5aXt5&_nc_oc=AdldkWPCLUFZexmEk8sqRrDhdxgIOW_zgkzbWMnAzxYru5T2bE0yUADPElDxarNV-aBGSskoiYDeEHxDT-DzmjSP&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=u1KBVrJSP5VYPhqBvuuefw&oh=00_AfPzMSwnnzYI5BxrM94qU4630gVfrFq9hx85KuV66SdWIA&oe=6869E818"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
