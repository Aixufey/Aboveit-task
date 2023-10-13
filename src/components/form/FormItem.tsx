import { ChangeEvent, useState, FormEvent } from "react";
import { IProfile } from "..";
import { useAPIContext } from "../../hooks";










interface IFormItem {
    onEdit?: (data: IProfile) => void;
}
const FormItem: React.FC<IFormItem> = ({ onEdit }) => {
    const [pictureURL, setPictureURL] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [fName, setFName] = useState<string>("");
    const [lName, setLName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const apiContext = useAPIContext();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        const { name, value, files } = e.currentTarget;
        switch (name) {
            case 'picture':
                if (files) {
                    const file = files[0];
                    const src = URL.createObjectURL(file);
                    setPictureURL(src);
                }
                break;
            case 'gender':
                setGender(value);
                break;
            case 'title':
                setTitle(value);
                break;
            case 'fName':
                setFName(value);
                break;
            case 'lName':
                setLName(value)
                break;
            case 'age':
                setAge(value)
                break;
            case 'email':
                setEmail(value)
                break;
        }
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(pictureURL, gender, fName, lName, age, email)
        const data: IProfile = {
            gender: gender,
            name: {
                title: title,
                first: fName,
                last: lName
            },
            location: {
                street: {
                    number: "N/A",
                    name: "N/"
                },
                city: "Nilfgaard",
                state: "N/A",
                country: "N/A",
                postcode: "N/A",
            },
            email: email,
            dob: {
                age: age
            },
            phone: "/",
            picture: {
                large: pictureURL ? pictureURL : "./src/assets/profile-user.png",
                medium: "",
                thumbnail: ""
            }
        };

        // If not using context, formitem has to be called from a List, that is a dependency which update the arrays state
        // onEdit && onEdit(data)
        apiContext?.addProfile(data)

        // Should clear GUI, but didnt had time - could possibly validate data keys clear handler.
        // setPictureURL('')
        // setTitle('')
        // setGender('')
        // setFName('')
        // setLName('')
        // setAge('')
        // setEmail('')
        // console.log(pictureURL)
        // console.log(title)
        // console.log(gender)
        // console.log(fName)
        // console.log(lName)
        // console.log(age)
        
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center my-5">Create profile</h1>
            </div>

            <form onSubmit={handleSubmit} className="container">
                <div className="mb-3">
                    <label htmlFor="male">Male</label>
                    <input style={{ marginLeft: 1, marginRight: 5 }} type="radio" name="gender" value="male" onChange={handleChange} />
                    <label htmlFor="female">Female</label>
                    <input style={{ marginLeft: 1, marginRight: 5 }} type="radio" name="gender" value="female" onChange={handleChange} />
                    <label htmlFor="other">Other</label>
                    <input style={{ marginLeft: 1, marginRight: 5 }} type="radio" name="gender" value="other" onChange={handleChange} checked />
                </div>

                <div className="mb-3">
                    <label htmlFor="picture" className="form-label">Picture</label>
                    <input name="picture" type="file" className="form-control" onChange={handleChange} accept="image/*" />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input name="title" type="text" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="fName" className="form-label">First name*</label>
                    <input name="fName" type="text" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="lName" className="form-label">Last name*</label>
                    <input name="lName" type="text" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age*</label>
                    <input name="age" type="number" min={16} className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input name="email" type="email" className="form-control" onChange={handleChange} required />
                </div>

                <div className="d-grid gap-2">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
        </>
    )
}
export default FormItem;