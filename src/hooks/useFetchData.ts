import { useEffect, useState } from "react";
import IProfile from "../components/profile/IProfile";
import axios from "axios";

const useFetchData = (): IProfile[] => {
    const [data, setData] = useState<IProfile[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const URL = `https://randomuser.me/api/?results=30&seed=aboveit&exc=login`;
            const response = await axios.get(URL);
            setData(response.data.results);
        } catch (err) {
            console.log("error", err);
        }
    };
    return data;
};
export default useFetchData;
