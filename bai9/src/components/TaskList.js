import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
    const initFilter = {
        filerName: "",
        filterStatus: -1,
    };

    const [filter, setFilter] = useState(initFilter);

    const handleOnchange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        props.onFilter(
            name === "filterName" ? value : filter.filerName,
            name === "filterStatus" ? value : filter.filterStatus
        );
        setFilter({
            ...filter,
            [name]: value,
        });
    };

    var { tasks } = props;
    var elmTasks = tasks.map((task, index) => {
        return (
            <TaskItem
                key={task.id}
                task={task}
                index={index + 1}
                onUpdateStatus={props.onUpdateStatus}
                onDeleteTask={props.onDeleteTask}
                onSelectedItem={props.onSelectedItem}
            />
        );
    });

    return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    onChange={handleOnchange}
                                    value={filter.filerName}
                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    onChange={handleOnchange}
                                    value={filter.filerName}
                                >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
