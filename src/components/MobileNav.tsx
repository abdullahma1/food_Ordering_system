import { CircleUserRound, Menu  } from 'lucide-react'
import { SheetTrigger,Sheet, SheetTitle, SheetDescription, SheetContent } from './ui/sheet'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLinks from './ui/MobileNavLinks'

const MobileNav = () => {
  const { isAuthenticated , loginWithRedirect , user} = useAuth0();
  return (
    <Sheet>
        
        <SheetTrigger>
            <Menu className='text-orange-500'></Menu>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
        <SheetTitle>
          {isAuthenticated ? <span className='flex items-center font-bold gap-2'>
            <CircleUserRound className='flex-1 font-bold  text-orange-500'></CircleUserRound>
         {user?.email} </span> : <span>Welcome to FOODEATS</span> }
            
        </SheetTitle>
        <Separator/>
        <SheetDescription className='flex flex-col gap-4'>
          {isAuthenticated ? <MobileNavLinks /> :  <Button className='flex-1 font-bold bg-orange-500' onClick={()=>loginWithRedirect()}>Login</Button> }
           
        </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav