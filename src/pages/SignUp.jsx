import React, { useState } from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../utils/FireBase'


const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Success');
        } catch (err) {
            alert(err); 
        }
    };

    return (
        <div>
            <form className="max-w-sm mx-auto">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              UserName
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Enter a UserName'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter a Email"
                        required=""
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='Enter a password'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required=""
                    />
                </div>
                
                <button
                    type="submit"
                    onClick={handleSignup}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup;