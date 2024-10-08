// function prototype or, signature 
let user1: () => void;
let user2: (name: string) => string;
let user3: (name: string, id: number) => void;

// function body
user1 = () => {
    console.log('user loged in successfully');
};

user1();

user2 = (name) => {
    return name;
}

console.log(user2("John Doe"));
