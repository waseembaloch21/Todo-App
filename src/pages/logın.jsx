import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { AppRoutes } from '../constant/AppRoutes';
import { AuthContext } from '../context/AuthContext';
import { Button, message, Checkbox, Form, Input } from 'antd';
import Cookies from 'js-cookie';
import todoLogo from '../assets/Logo1.png'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(AuthContext)

  const showMessage = () => {
    
    message.success('Success!');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const obj = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    setLoading(true)
    axios.post(AppRoutes.login, obj).then((data) => {
      Cookies.set("token", data?.data?.data?.token)
      setUser(data?.data?.data?.user)
      setLoading(false)
    }).catch((err) => {
      console.log("err=>", err)
      setLoading(false)
    })

  }

  return (

    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 container ">
      <a
        className="flex items-center mb-6 font-serif text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          className="w-8 rounded-full h-8 mr-2"
          src={todoLogo}
          alt="logo"
        />
        Todo App
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold font-serif leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <Form
            onSubmitCapture={handleSubmitForm}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button
                type="primary"
                onClick={showMessage}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>


  )
}