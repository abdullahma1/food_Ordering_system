import { Link } from "react-router-dom"
import { Button } from "./button"

const MobileNavLinks = () => {
    return (
        <>
        <Link to='/user-profile' className="flex bg-white items-center font-bold hover:text-orange-500">
            User Profile
        </Link>
        <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </>
    )
}