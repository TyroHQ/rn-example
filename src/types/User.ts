
export interface User {
    id: string
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    telephone: {
        countryCode: number;
        telNumber: number;
    };
    dateOfBirth: {
        day: number;
        month: number;
        year: number;
    };
    gender: string;
}
