
export interface CustomerRepresentation {
    firstName: string;
    lastName: string;
    address: string;
    zipCode: string;
    city: string;
    phone: string;
    email: string;
    birthdate: string;
}

export const CUSTOMER_DATA: CustomerRepresentation = {
    firstName: "John",
    lastName: "Doe",
    address: "3 Rue Nationale",
    zipCode: "28820",
    city: "Cloyes-les-Trois-Rivières",
    phone: "789564123",
    email: "x6i7l@example.com",
    birthdate: "01/01/1990"
}