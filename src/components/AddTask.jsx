import React, {useState} from 'react';

const AddTask = ({taskList, setTaskList}) => {
    const [addModal,setAddModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const ERRORTEXT = "Enter project name to continue"
    const handleAdd = (e) => {
            e.preventDefault();
        if(!projectName) {
            setErrorMessage(ERRORTEXT)
        } else {
            let timestamp = new Date().getTime()
            setTaskList([...taskList, {projectName, taskDescription, timestamp: timestamp}]);
            setAddModal(false);
            setProjectName("");
            setTaskDescription("");
        }
    }

    const handleInputValue = (e) => {
        const {name, value} = e.target;
        if(name === "projectName") {
            setProjectName(value);
            setErrorMessage("")
        }
        if(name === "projectName" && value === "") {
            setErrorMessage(ERRORTEXT)
        }
        if(name === "Task description") setTaskDescription(value);
    }

    return (
        <>
           <button className=" bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
            type="button"
            onClick={() => setAddModal(true)}
           >+ New</button>
            {addModal ?
            <>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <div className="w-9/12 max-w-lg bg-white border rounded-lg shadow-mg relative flex flex-col">
                        <div className=" flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                            <h3 className="bg-white text-3xl font-semibold">Add new Task</h3>
                            <button className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                                    onClick={() => setAddModal(false)}>X</button>
                        </div>
                        <form className="px-6 pt-6 pb-4">
                            <div className="">
                                <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                                 htmlFor="project-name">Project name</label>
                                <input className="w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:bg-white"
                                 id="project-name" type="text" placeholder="Project name" name={"projectName"} value={projectName} onChange={(e) => handleInputValue(e)} required/>
                                <p className="text-red-500 text-center mt-2 md-5">{errorMessage}</p>
                            </div>
                            <div className="">
                                <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                                htmlFor="task-description">
                                    Task description
                                </label>
                                <textarea
                                className="w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:bg-white "
                                id="task-description"
                                rows="5"
                                placeholder="Task description"
                                name="Task description"
                                value={taskDescription}
                                onChange={(e) => handleInputValue(e)}
                                />
                            </div>
                        </form>
                        <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                            <button className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover: opacity-70"
                            onClick={(e) => handleAdd(e)}
                            >Add Task</button>
                        </div>
                    </div>
                </div>
            </>
                :
             null
            }
        </>
    );
};

export default AddTask;
