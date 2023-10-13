import { createContext, useContext, useEffect, useState } from "react";
import APIServiceModule from "../services/APIServiceModule";
import { IProfile } from "../components";








interface IAPIContext {
    data: IProfile[]

    getAll: () => void
    // and others
    addProfile: (profile: IProfile) => void;
}
type props = {
    children?: React.ReactNode
}

export const APIContext = createContext<IAPIContext | null>(null);

// Hook
export const useAPIContext = () => {
    const context = useContext(APIContext);
    if (!context) {
        console.log('Could not use context')
    }
    return context;
}


// Wrapping App in main.tsx
const APIContextProvider: React.FC<props> = ({ children }) => {
    const [data, setData] = useState<IProfile[]>([]);

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        const response = await APIServiceModule.getAll();
        setData(response.results);
    }

    const addProfile = (profile: IProfile) => {
        setData((prevData) => {
            return [profile, ...prevData];
        });
    }

    return (
        <APIContext.Provider value={{
            data, getAll, addProfile
        }}>
            {children}
        </APIContext.Provider>
    )
}
export default APIContextProvider;