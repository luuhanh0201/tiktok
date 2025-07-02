import { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import AccountItem from "@/components/AccountItem";
const cx = classNames.bind(styles);
function InputSearch() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchValue]);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        {searchResult.map((user) => {
                            return (
                                <AccountItem
                                    key={user.id}
                                    avatar={user.avatar}
                                    fullName={user.full_name}
                                    nickname={user.nickname}
                                    tick={user.tick}
                                />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
            visible={showResult && searchResult.length > 0}
            interactive={true}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    placeholder="Search account and videos"
                    spellCheck={true}
                    onFocus={() => setShowResult(true)}
                />
                {/* Icon clear */}
                {searchValue && !loading && (
                    <FontAwesomeIcon
                        onClick={handleClear}
                        className={cx("clear-icon")}
                        icon={faCircleXmark}
                        size="lg"
                    />
                )}
                {/* Icon loading */}
                {loading && <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} size="lg" />}
                {/* Icon search */}
                <HeadlessTippy content="Tìm kiếm" placement="bottom">
                    <button className={cx("search-btn")} type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    </button>
                </HeadlessTippy>
            </div>
        </HeadlessTippy>
    );
}

export default InputSearch;
