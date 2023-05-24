import {memo, ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'
import './styles.less'
import {Spin} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   typeButton?: 'navigate' | 'link' | 'cancel'
   loading?: boolean
}

export const AppButton = memo<Props>(({typeButton, loading, ...rest}) => {
   const className = classNames([
      {'app-button': !(typeButton === 'link')},
      {'cancel-button': typeButton === 'cancel'},
      {'navigate-button': typeButton === 'navigate'},
      {'text-turquoise-blue underline text-sm': typeButton === 'link'},
   ])
   return (
      <Spin
         spinning={!!loading}
         indicator={
            <LoadingOutlined
               style={{fontSize: 28, marginTop: '-14px'}}
               spin
            />
         }>
         <button
            {...rest}
            className={className}
         />
      </Spin>
   )
})
