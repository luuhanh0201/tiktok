import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/472111998_3829560317292102_3046265317876554402_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3jUo36i5HAsQ7kNvwHwwMnC&_nc_oc=Adnz5qzob7Ma3BKSNsJZO-T3FDHGIhpa1mqLah97WFxnigJpFEs4AfpfF37m0meAPH0pfwy8xK8Q4ckmDr-W6oHQ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=GzOu81sYzbQ0d7GvNvfI4g&oh=00_AfNY8fpUpas6JIHl6riHjgoxAL7JLM_6cdbmRtvTAiFRWw&oe=686721B2"
                alt="Hanh"
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Luu Dinh Hanh</span> <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
                </p>
                <span className={cx("username")}>luuhanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
