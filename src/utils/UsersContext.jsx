import { Children, createContext, useEffect, useState } from "react";
import { getUsers } from "../services/getUsers";

export const UsersContext = createContext({});

const UsersContextProvider = ({ children }) => {
    const [chatProfiles, setChatProfiles] = useState(["", "", "", "", "", "", "", "", "", "", "", ""]);
    const fetchUsers = async () => {
        const users = await getUsers();
        console.log(users);
        setChatProfiles(users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <UsersContext.Provider value={{ chatProfiles, setChatProfiles }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider;