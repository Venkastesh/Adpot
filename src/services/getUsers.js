import axios from "axios";

// export async function getUsers() {
//     try {
//         const { data, status, statusText } = await axios.get(`${import.meta.env.VITE_BACKENDURL}/getUsers`);
//         console.log(data, status, statusText);
//         return data;  
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         throw error;
//     }
// }

export async function getUsers() {
    try {
        const { data, status, statusText } = await axios.get(`https://randomuser.me/api/?page=6&results=15&seed=abc`);
        return data.results;  
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}