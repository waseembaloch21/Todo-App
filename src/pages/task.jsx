import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { AppRoutes } from '../constant/AppRoutes';
import Cookies from 'js-cookie';
export default function Task() {
    const { user, setUser } = useContext(AuthContext)
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    useEffect(() => { getTasks() }, [])
    
    const showMessage = () => {
        message.success(' Task Added Successfully !');
      };
      
    const getTasks = () => {
        axios.get(AppRoutes.getTask, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        }).then((res) => setTasks(res.data.data))
    }

    const addTasks = () => {
        axios.post(AppRoutes.addTask, { task }, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        }).then((res) => {
            console.log(res.data)
            setTask('')
            getTasks()
        })
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between  my-10'>
                <h1 className='text-3xl font-semibold font-serif'>Welcome {user?.fullname}</h1>

                <button className=' bg-red-400 rounded-sm p-2 font-serif px-4 '
                    onClick={() => {
                        setUser(null)
                        Cookies.set("token", null)
                    }}
                >Logout</button>
            </div>

            <div className='flex gap-3 my-3'>
                <input value={task} className='border font-serif rounded-sm p-2'
                    onChange={(e) => setTask(e.target.value)}
                    type='text'
                    placeholder='Add Task' />

                <button
                    disabled={value === ""}
                    className='p-2 px-3 ml-2 font-serif rounded-sm bg-cyan-500'
                    onClick={addTasks}
                    style={{ backgroundColor: value === '' && "gray" }}
                    onClickCapture={showMessage}
                >
                    Add
                </button>
            </div>
            
            {
                tasks.map((data) => {
                    return (
                        <div key={data._id}>
                            <h1
                                className='font-serif font-semibold text-2xl py-4 my-2 flex bg-slate-100 px-2'>
                                {data.task}
                            </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}