import React from "react";
import TaskSearchControl from "./TaskSearchControl";
import TaskSortControl from "./TaskSortControl";

export default function TaskControl(props) {
    return (
        <div className="row mt-15">
            <TaskSearchControl onSearch={props.onSearch} />
            <TaskSortControl
                onSort={props.onSort}
                sortBy={props.sortBy}
                sortValue={props.sortValue}
            />
        </div>
    );
}
