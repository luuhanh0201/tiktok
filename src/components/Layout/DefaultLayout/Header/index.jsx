import images from "@/assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Logo */}
                <img src={images.logo} />
                {/* Search */}
                <div className={cx("search")}>
                    <input type="text" placeholder="Search account and videos" spellCheck={true} />
                    {/* Icon clear */}
                    <FontAwesomeIcon className={cx("clear-icon")} icon={faCircleXmark} size="lg" />
                    {/* Icon loading */}
                    <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} size="lg" />
                    {/* Icon search */}
                    <button className={cx("search-icon")} type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    </button>
                    <span></span>
                </div>
                {/* Action button */}
                <div className={cx("action")}>
                    <button type="submit">Login</button>
                    <button type="submit">Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
