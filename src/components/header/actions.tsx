import {UserOutlined} from '@ant-design/icons'
import {SearchOutlined, ShoppingCartOutlined} from '@ant-design/icons/lib/icons'
import {Input} from 'antd'
import {useNavigate} from 'react-router-dom'

function Actions() {
   const navigate = useNavigate()
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
         <div
            title="Login"
            className="text-2xl cursor-pointer "
            onClick={() => navigate('/login')}>
            <UserOutlined />
         </div>
      </div>
   )
}

export default Actions
