import {useContext} from "react";
import {AuthContext} from "@/contexts/auth/AuthContext.jsx";

function UseAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
}

export default UseAuth;