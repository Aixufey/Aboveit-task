import { FormItem } from "..";
import { useAPIContext } from "../../hooks/useApiContext";
import useFetchData from "../../hooks/useFetchData";
import IProfile from "./IProfile";
import ProfileItem from "./ProfileItem";
import { useState, useEffect } from 'react';







const dummy: IProfile = {
    gender: "Female",
    name: {
        title: "Ms",
        first: "Super",
        last: "woman"
    },
    location: {
        street: {
            number: 123,
            name: "Main St"
        },
        city: "New York",
        state: "New York",
        country: "USA",
        postcode: 12345,
    },
    email: "askMe@mail.icq",
    dob: {
        age: "19"
    },
    phone: "123-321",
    picture: {
        large: "./src/assets/user-profile.png"
    }
}
const ProfileList: React.FC = () => {
    const [profiles, setProfiles] = useState<IProfile[]>([dummy])
    const [createdData, setCreatedData] = useState<IProfile[]>([]);
    const apiContext = useAPIContext()?.data;
    // const context = useAPIContext();
    // useEffect(() => {
    //     if (context) {
    //         setProfiles(context.data)
    //     }
    // }, [context])

    // using custom Hook
    const data = useFetchData();
    useEffect(() => {
        if (data) {
            setProfiles(data)
        }
        return () => {
            apiContext && setCreatedData(apiContext);
        }
    }, [data, apiContext])

    // This one rely on passing setter into FormItem to update array if not using context.
    const handleEdit = (data: IProfile) => {
        setCreatedData((prevData) => [data, ...prevData])
    }
    // console.log(createdData)

    const mergeProfiles = [...createdData, ...profiles];
    // console.log(mergeProfiles)
    return (
        <>
            {/* <FormItem onEdit={handleEdit} /> */}
            <div className="container">
                <h1 className="text-center my-5">Profiles</h1>
            </div>

            <section className="row row-cols-1 row-cols-md-3 g-4">
                {/* <h1 className='text-primary'>Profile list</h1> */}

                {
                    mergeProfiles ?
                        mergeProfiles.map((p, i) =>
                            <ProfileItem
                                key={i}
                                gender={p.gender}
                                name={p.name}
                                location={p.location}
                                email={p.email}
                                dob={p.dob}
                                phone={p.phone}
                                picture={p.picture}
                            />
                        ) : <>Loading...</>}
            </section>
        </>
    )
}
export default ProfileList;