import React from 'react'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import UserNameMenu from './UserNameMenu'
const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span>
      {isAuthenticated ? <UserNameMenu /> : <Button onClick={async () => await loginWithRedirect()} variant="ghost" className='font-bold hover:text-orange-500 hover:bg-white '>
        Login
      </Button>}
    </span>



  )
}

export default MainNav