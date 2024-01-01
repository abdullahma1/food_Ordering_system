import { useAuth0 } from '@auth0/auth0-react'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNameMenu = () => {
  const { user } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-orange-500 gap-2'>
        <CircleUserRound className='text-orange-500'>
          {user?.email}
        </CircleUserRound>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to='/user-profile' className='font-bold hover:text-orange-500'>
            User Profile
          </Link>
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default UserNameMenu