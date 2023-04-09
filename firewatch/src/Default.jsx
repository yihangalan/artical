import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Moon from "./Moon";
import App from "./App";
import Layout from "./Layout";

function Default() {
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="firewatch" replace />} />
                <Route path="firewatch" element={<App />} />
            </Route>
            <Route path="/" element={<Layout />}>
                <Route path="moon" element={<Moon />} />
            </Route>

        </Routes>

    );
}
export default Default;