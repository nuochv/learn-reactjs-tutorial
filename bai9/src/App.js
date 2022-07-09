import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [filterName, setFilterName] = useState("");
    const [filterStatus, setFilterStatus] = useState("-1");
    const [itemEditing, setItemEditing] = useState(null);
    const [sortBy, setSortBy] = useState(1);
    const [sortValue, setSortValue] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("haha");
        if (localStorage && localStorage.getItem("tasks")) {
            var tasksLocal = JSON.parse(localStorage.getItem("tasks"));
            setTasks(tasksLocal);
        }
    }, [counter]);

    const generateId = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    const findIndex = (id) => {
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    };

    const onUpdateStatus = (id) => {
        var index = findIndex(id);
        tasks[index].status = !tasks[index].status;
        setTasks(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setCounter(counter + 1);
    };

    const onSave = (data) => {
        data.status = data.status === "true" ? true : false;
        if (data.id === "") {
            data.id = generateId();
            tasks.push(data);
        } else {
            var index = findIndex(data.id);
            tasks[index] = data;
        }
    };

    const onGenerateData = () => {
        const data = [
            {
                id: "12345",
                name: "nuochv",
                status: true,
            },
            {
                id: "2019",
                name: "hhanh",
                status: true,
            },
            {
                id: "1997",
                name: "ltquynh",
                status: true,
            },
        ];

        localStorage.setItem("tasks", JSON.stringify(data));
    };

    const onToggleForm = () => {
        if (itemEditing !== null) {
            setItemEditing(null);
        } else {
            setIsDisplayForm(true);
        }
    };

    const onExitForm = () => {
        setIsDisplayForm(false);
        setItemEditing(null);
    };

    const onDeleteTask = (id) => {
        var index = findIndex(id);
        tasks.splice(index, 1);
        setTasks(tasks);
        setCounter(counter + 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        onExitForm();
    };

    const onSearch = (keyword) => {
        setKeyword(keyword);
    };

    const onFilter = (mfilterName, mfilterStatus) => {
        setFilterName(mfilterName);
        setFilterStatus(mfilterStatus);
    };

    const onSelectedItem = (item) => {
        setItemEditing(item);
        setIsDisplayForm(true);
    };

    const onSort = (msortBy, msortValue) => {
        setSortBy(msortBy);
        setSortValue(msortValue);
    };

    tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    if (filterName) {
        tasks.filter((task) => {
            return (
                task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            );
        });
    }
    if (filterStatus) {
        tasks.filter((task) => {
            if (filterStatus === "-1" || filterStatus === -1) {
                return task;
            } else {
                return (
                    task.status ===
                    (parseInt(filterStatus, 10) === 1 ? true : false)
                );
            }
        });
    }
    if (sortBy === "name") {
        tasks.sort((a, b) => {
            if (a.name > b.name) return sortValue;
            else if (a.name < b.name) return -sortValue;
            else return 0;
        });
    } else {
        tasks.sort((a, b) => {
            if (a.status > b.status) return -sortValue;
            else if (a.status < b.status) return sortValue;
            else return 0;
        });
    }
    var elmForm =
        isDisplayForm === true ? (
            <TaskForm
                onSave={onSave}
                onExitForm={onExitForm}
                itemEditing={itemEditing}
            />
        ) : (
            ""
        );

    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div
                    className={
                        isDisplayForm === true
                            ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                            : ""
                    }
                >
                    {elmForm}
                </div>
                <div
                    className={
                        isDisplayForm === true
                            ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                            : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    }
                >
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onToggleForm}
                    >
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={onGenerateData}
                    >
                        <span className="fa fa-plus mr-5"></span>Generate Data
                    </button>
                    <TaskControl
                        onSearch={onSearch}
                        onSort={onSort}
                        sortBy={setSortBy}
                        sortValue={setSortValue}
                    />
                    <TaskList
                        tasks={tasks}
                        onUpdateStatus={onUpdateStatus}
                        onDeleteTask={onDeleteTask}
                        filterName={filterName}
                        filterStatus={filterStatus}
                        onFilter={onFilter}
                        onSelectedItem={onSelectedItem}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
