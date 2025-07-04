import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <SideBar />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
