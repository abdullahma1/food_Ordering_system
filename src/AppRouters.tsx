import { Navigate, Route, Routes } from "react-router-dom"
import Layout from './layouts/layout'
import Homepage from "./pages/Homepage"
const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout childern={<Homepage/>}></Layout>}/>
            <Route path="/user-profile" element={<span>User</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRoutes