import React, { useState } from "react";

export default function TaskSearchControl(props) {
    const [keyword, setKeyword] = useState("");
    const onHandleChange = (e) => {
        setKeyword(e.target.value);
    };

    const onSearch = () => {
        props.onSearch(keyword);
    };
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    name="keyword"
                    value={keyword}
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    onChange={onHandleChange}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onSearch}
                    >
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        </div>
    );
}
