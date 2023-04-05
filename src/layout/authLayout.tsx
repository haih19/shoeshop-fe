import {memo, ReactNode} from 'react'

interface Props {
   children: ReactNode
}

export const AuthLayout = memo(({children}: Props) => {
   return (
      <div className="bg-white">
         <div className="w-4/5 max-w-[460px] flex flex-col mx-auto">
            <div
               style={{width: 40, height: 40}}
               className="my-[24px]">
               <img
                  src="nike-logo-1.png"
                  alt="logo"
               />
            </div>
            <div>{children}</div>
         </div>
      </div>
   )
})
