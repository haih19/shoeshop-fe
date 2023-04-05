import {memo, ReactNode} from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

interface Props {
   children: ReactNode
}

export const MainLayout = memo(({children}: Props) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
})
