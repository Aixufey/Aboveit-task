








export default interface IProfile {
    gender?: string
    name?: {
        title?: string
        first?: string
        last?: string
    };
    location?: {
        street?: {
            number?: number | string
            name?: string
        };
        city?: string
        state?: string
        country?: string
        postcode?: number | string
    };
    email?: string
    dob?: {
        age?: string
    };
    phone?: string
    picture: {
        large?: string
        medium?: string
        thumbnail?: string
    };
}
