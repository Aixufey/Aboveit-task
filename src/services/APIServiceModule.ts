import axios from "axios";









// IIFE packed with endpoints and possibly CRUD ops.
const APIServiceModule = (() => {
    const endpoints = {
        users: "https://randomuser.me/api/?results=30&seed=aboveit&exc=login",
    };
    const getAll = async () => {
        try {
            const result = await axios.get(endpoints.users);
            return result.data;
        } catch {
            console.log("Error in getAll");
        }
    };
    return {
        getAll,
    };
})();

export default APIServiceModule;
