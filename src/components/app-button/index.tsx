import {memo, ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'
import './styles.less'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   typeButton?: 'navigate' | 'link' | 'cancel'
}

export const AppButton = memo<Props>(({typeButton, ...rest}) => {
   const className = classNames([
      {'app-button': !(typeButton === 'link')},
      {'cancel-button': typeButton === 'cancel'},
      {'navigate-button': typeButton === 'navigate'},
      {'text-turquoise-blue underline text-sm': typeButton === 'link'},
   ])
   return (
      <button
         {...rest}
         className={className}
      />
   )
})
