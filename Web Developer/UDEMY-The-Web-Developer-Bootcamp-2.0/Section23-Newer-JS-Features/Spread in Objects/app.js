const feline = {
    legs: 4,
    family: "Felidae"
};

const canine = {
    isFurry: true,
    family: "Caninae"
};

const result = {...feline, color: "black"};

const catDog = {...feline, ...canine};//legs: 4, family: Caninae, isFurry: true

const hi = {..."HI"};//{0: "H", 1: "I"}

//Example Use Case

const dataForm = {
    email: "admin@gmail.com",
    password: "admin123",
    username: "admin"
};

const newUser = {...dataForm, id: 1001, isAdmin: false};
