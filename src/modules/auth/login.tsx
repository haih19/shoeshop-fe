import {Form} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import {FloatInput} from '../../components/float-input'
import {useState} from 'react'
import {AppButton} from '../../components/app-button'
import {rules} from './constants'
import apiAuth from '../../services/api.auth'
import './styles.less'
import {useMutation} from '@tanstack/react-query'
import {ILoginParam} from '../../types'
import {AppRoutes} from '../../routes/route-constants'

export const LoginWrapper = () => {
   const [email, setEmail] = useState<string>()
   const [password, setPassword] = useState<string>()
   const [form] = Form.useForm()
   const navigate = useNavigate()

   const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value)
   }

   const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value)
   }

   const {
      mutate: loginMutate,
      isError,
      isLoading,
      error,
   } = useMutation({
      mutationFn: (body: ILoginParam) => {
         return apiAuth.login(body)
      },
      onSuccess: (data) => {
         localStorage.setItem('accessToken', data.access_token)
         navigate('/')
      },
   })

   const onSubmit = async () => {
      const email: string = form.getFieldValue('email')
      const password: string = form.getFieldValue('password')
      loginMutate({email, password})
   }
   return (
      <div className="flex flex-col">
         <p className="text-[28px] font-normal text-[#00000] mb-[12px]">
            Enter your email and password to login or{' '}
            <Link
               to={AppRoutes.signup}
               className="border-b-2 border-solid border-black pb-[1px] cursor-pointer hover:opacity-50">
               sign up
            </Link>
         </p>
         <div className="text-lg">
            Vietnam <span className="text-[rgb(117,117,117)] underline">Change</span>
         </div>
         <Form
            form={form}
            size="large"
            name="user_login"
            className="login-form mt-7  flex flex-col gap-[6px]"
            layout="vertical">
            <FloatInput
               name="email"
               label="Email"
               placeholder="Email here please"
               value={email}
               onChange={onChangeEmail}
               rules={rules.email}
            />
            <FloatInput
               name="password"
               label="Password"
               placeholder="Enter your password"
               value={password}
               onChange={onChangePassword}
               type="password"
               isPassword={true}
               rules={rules.password}
            />
            <div className="text-gray-75 font-normal opacity-60 mt-[10px]">
               By continuing, I agree to Shoe Shop’s{' '}
               <span className="underline cursor-pointer">Privacy Policy</span> and{' '}
               <span className="block">
                  <span className="underline cursor-pointer">Terms of Use</span>.
               </span>
            </div>
            <div className="flex justify-end">
               <AppButton
                  onClick={onSubmit}
                  style={{padding: 10}}
                  className="w-full shadow font-bold text-base">
                  Log in
               </AppButton>
            </div>
         </Form>
      </div>
   )
}
