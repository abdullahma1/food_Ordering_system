import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<span>Hello</span>}/>
            <Route path="/user-profile" element={<span>User</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRoutes