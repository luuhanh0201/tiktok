import images from "@/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faQuestion,
    faSignIn,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
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

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Logo */}
                <img src={images.logo} />
                {/* Search */}
                <Tippy
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
                        <Tippy content="Tìm kiếm" placement="bottom">
                            <button className={cx("search-btn")} type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                {/* Action button */}
                <div className={cx("action")}>
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
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
