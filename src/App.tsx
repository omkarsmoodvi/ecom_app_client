import AdminLayout from "@/components/layouts/AdminLayout"
import UserLayout from "@/components/layouts/UserLayout"
import AdminOrders from "@/pages/admin/AdminOrders"
import AdminProducts from "@/pages/admin/AdminProducts"
import AdminUsers from "@/pages/admin/AdminUsers"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import UserCart from "@/pages/user/UserCart"
import UserOrders from "@/pages/user/UserOrders"
import UserProducts from "@/pages/user/UserProducts"
import UserProfile from "@/pages/user/UserProfile"
import { Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route element={<UserLayout />}>
                    <Route path="/user/products" element={<UserProducts />} />
                    <Route path="/user/orders" element={<UserOrders />} />
                    <Route path="/user/cart" element={<UserCart />} />
                    <Route path="/user/profile" element={<UserProfile />} />
                   
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/orders" element={<AdminOrders />} />
                </Route>

            </Routes>
        </>
    )
}

export default App