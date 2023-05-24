import {LoadingOutlined} from '@ant-design/icons'
import {Spin} from 'antd'
import {ReactNode} from 'react'

interface Props {
   children?: ReactNode
   loading?: boolean
}

const Loading = ({children, loading}: Props) => (
   <Spin
      spinning={!!loading}
      indicator={
         <LoadingOutlined
            style={{fontSize: 40}}
            spin
         />
      }>
      {children}
   </Spin>
)

export default Loading
