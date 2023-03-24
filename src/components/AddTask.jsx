import React, {useState} from 'react';

const AddTask = () => {
    const [addModal,setAddModal] = useState(false);

    return (
        <>
           <button className=" bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
            type="button"
            onClick={() => setAddModal(true)}
           >+ New</button>
            {addModal ?
            <>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <div className="w-9/12 bg-white border rounded-lg shadow-mg relative flex flex-col">
                        <div className=" flex flex-row justify-between p-5 border ">
                            <h3 className="bg-white text-3xl font-semibold">Add new Task</h3>
                            <button className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                                    onClick={() => setAddModal(false)}>X</button>
                        </div>
                        <form className="p-6">
                            <div className="">
                                <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                                 htmlFor="project-name">Project name</label>
                                <input className="w-full  bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-5 leading-tight focus: bg-white"
                                 id="project-name" type="text" placeholder="Project name" required/>
                            </div>
                            <div className="">
                                <label className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                                htmlFor="task-description">
                                    Task description
                                </label>
                                <textarea
                                className="w-full  bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-5 leading-tight focus: bg-white"
                                id="task-description"
                                rows="3"
                                placeholder="Task description"
                                />
                            </div>
                        </form>
                        <div>
                            <button className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover: opacity-70"></button>
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
