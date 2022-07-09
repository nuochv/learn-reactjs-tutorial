import React, { useEffect, useState } from "react";

export default function TaskForm(props) {
    const initialObjTask = {
        id: "",
        name: "",
        status: false,
    };
    const [objTask, setObjTask] = useState(initialObjTask);

    useEffect(() => {
        if (props.itemEditing && props.itemEditing.id !== null) {
            setObjTask({
                id: props.itemEditing.id,
                name: props.itemEditing.name,
                status: props.itemEditing.status,
            });
        }
    }, [props]);

    useEffect(() => {
        if (props && props.itemEditing) {
            setObjTask({
                id: props.itemEditing.id,
                name: props.itemEditing.name,
                status: props.itemEditing.status,
            });
        }
    }, [props]);

    const onClear = () => {
        setObjTask(initialObjTask);
    };

    const onHandleOnChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        setObjTask({
            ...objTask,
            [name]: value,
        });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onSave(objTask);
        onClear();
        onExitForm();
    };

    const onExitForm = () => {
        props.onExitForm();
    };

    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {!objTask.id ? "Thêm Công Việc" : "Cập Nhật Công Việc"}
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={onExitForm}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={objTask.name}
                            onChange={onHandleOnChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        value={objTask.status}
                        onChange={onHandleOnChange}
                        name="status"
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            <span className="fa fa-plus mr-5"></span>Lưu Lại
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            onClick={onClear}
                            className="btn btn-danger"
                        >
                            <span className="fa fa-close mr-5"></span>Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
