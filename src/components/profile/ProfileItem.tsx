import { useState } from "react";
import IProfile from "./IProfile";









const ProfileItem: React.FC<IProfile> = ({ gender, name, location, email, dob, phone, picture }) => {
    const [flip, setFlip] = useState<boolean>(true);

    const handleFlip = () => {
        setFlip(!flip);
    }
    return (
        <article
            className="col"
            onClick={handleFlip}
            style={{ cursor: flip ? "grab" : "grabbing" }}
        >
            {
                flip ? (
                    <div className="card h-100">
                        <h2 className="card-title">{name?.title} {name?.first} {name?.last}</h2>
                        <img
                            className="card-img-top"
                            src={`${picture.large}`}
                            alt={`${name?.last}-profile_pic`}
                        />
                        <div className="card-body">
                            <p className="card-text">{gender} {dob?.age ? dob.age + " years." : ""}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="card h-100">
                            <h2 className="card-title"> Contact info: </h2>
                            <div className="card-body">
                                <address className="card-text">
                                    Street: {location?.street?.name} - {location?.street?.number}  <br />
                                    City: {location?.city} State: {location?.state} - {location?.postcode} <br />
                                    Country: {location?.country} <br />
                                    Phone: {phone} <br />
                                    Email: {email} <br />
                                </address>
                            </div>
                        </div>
                    </>
                )
            }
        </article>
    )
}
export default ProfileItem;

