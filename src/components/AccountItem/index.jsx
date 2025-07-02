import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function AccountItem({ avatar, fullName, nickname, tick = false }) {
    return (
        <Link to={`/@${nickname}`} className={cx("wrapper")}>
            <Image className={cx("avatar")} src={avatar} />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>{fullName}</span>{" "}
                    {tick && <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />}
                </p>
                <span className={cx("username")}>{nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
