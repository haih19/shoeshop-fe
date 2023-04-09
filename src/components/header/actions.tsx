import {Dropdown, Input, MenuProps} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {SearchOutlined, ShoppingCartOutlined} from '@ant-design/icons/lib/icons'
import {useNavigate} from 'react-router-dom'
import {AppRoutes} from '../../routes/route-constants'

function Actions() {
   const navigate = useNavigate()
   const items: MenuProps['items'] = [
      {
         key: '1',
         label: (
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://www.antgroup.com">
               Your profile
            </a>
         ),
      },
      {
         key: '2',
         label: (
            <div
               onClick={() => {
                  localStorage.clear()
                  navigate(AppRoutes.login)
               }}>
               Sign out
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
