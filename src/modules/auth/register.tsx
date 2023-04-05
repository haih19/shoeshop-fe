import {Button, Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import {FloatInput} from '../../components/float-input'
import {useState} from 'react'
import './styles.less'
import {AppButton} from '../../components/app-button'
import {rules} from './constants'

export const SignupWrapper = () => {
   const [email, setEmail] = useState<string>()
   const [password, setPassword] = useState<string>()

   const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value)
   }

   const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value)
   }
   return (
      <div className="flex flex-col">
         <p className="text-[28px] font-normal text-[#00000] mb-[12px]">
            Please enter the following details to sign up or{' '}
            <Link
               to={'/login'}
               className="border-b-2 border-solid border-black pb-[1px] cursor-pointer hover:opacity-50">
               log in
            </Link>
         </p>
         <div className="text-lg">
            Vietnam <span className="text-[rgb(117,117,117)] underline">Change</span>
         </div>
         <Form
            size="large"
            name="user_login"
            className="login-form mt-7 "
            layout="vertical">
            <div className="flex gap-[10px]">
               <div className="flex-1">
                  <FloatInput
                     name="name"
                     label="Name"
                     placeholder="Enter your name"
                     value={email}
                     onChange={onChangeEmail}
                     rules={rules.username}
                  />
               </div>
               <div className="flex-1">
                  <FloatInput
                     name="username"
                     label="Username"
                     placeholder="Enter your username"
                     value={email}
                     onChange={onChangeEmail}
                     rules={rules.username}
                  />
               </div>
            </div>
            <FloatInput
               name="email"
               label="Email"
               placeholder="Email here please"
               value={email}
               onChange={onChangeEmail}
               rules={rules.username}
            />
            <div>
               <FloatInput
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                  isPassword={true}
               />
               <FloatInput
                  name="confirm"
                  label="Confirm"
                  placeholder="Confirm password"
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                  isPassword={true}
               />
            </div>
            <div className="text-gray-75 font-normal opacity-60 mt-[40px]">
               By continuing, I agree to Shoe Shop’s{' '}
               <span className="underline cursor-pointer">Privacy Policy</span> and{' '}
               <span className="block">
                  <span className="underline cursor-pointer">Terms of Use</span>.
               </span>
            </div>
            <div className="flex justify-end mt-20px">
               <AppButton
                  style={{padding: 10}}
                  className="w-full shadow font-bold">
                  Log in
               </AppButton>
            </div>
         </Form>
      </div>
   )
}
