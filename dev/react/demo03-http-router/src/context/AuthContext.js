import React from "react";
import { useContext } from "react";

const AuthContext = React.createContext(null);

function useAuth()
{
    return useContext(AuthContext);
}

export {AuthContext};
export {useAuth};
