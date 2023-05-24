import {Dropdown, Input, MenuProps} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {
   LogoutOutlined,
   SearchOutlined,
   ShoppingCartOutlined,
} from '@ant-design/icons/lib/icons'
import {useNavigate} from 'react-router-dom'
import {AppRoutes} from '../../routes/route-constants'
import {STORAGE} from '../../helper/storage'

function Actions() {
   const navigate = useNavigate()
   const items: MenuProps['items'] = [
      {
         key: '1',
         label: (
            <div className="text-base font-medium">
               <span className="text-xl mt-[-6px] mr-[8px]">
                  <UserOutlined />
               </span>
               Your profile
            </div>
         ),
      },
      {
         key: '2',
         label: (
            <div
               className="flex items-center text-base font-medium"
               onClick={() => {
                  STORAGE.removeCookiesId()
                  STORAGE.removeSessionId()
                  navigate(AppRoutes.logIn)
               }}>
               <span className="text-xl mt-[-6px] mr-[8px]">
                  <LogoutOutlined />
               </span>

               <span>Sign out</span>
            </div>
         ),
      },
   ]
   return (
      <div className="flex items-center">
         <div className="mr-8 mt-1.5">
            <Input
               placeholder="Basic usage"
               suffix={<SearchOutlined className="cursor-pointer" />}
            />
         </div>

         <div className="text-2xl cursor-pointer mr-4">
            <ShoppingCartOutlined />
         </div>
         <Dropdown
            menu={{items}}
            placement="bottom"
            arrow>
            <div
               title="Login"
               className="text-2xl cursor-pointer ">
               <UserOutlined />
            </div>
         </Dropdown>
      </div>
   )
}

export default Actions
