console.log(arrowTitle)
    /* START CODE UNDER THIS LINE */

/*--------------------Pulse Check--------------------*/
//______________________________________________________
//Q1
const person = {
    Name: "Faisal",
    age: 23,
    gender: "Mail"
};
const movie = {
    name: "Batman",
    length: 2,
    gnere: "Crime,Action"
};
const favoriteFood = {
    favFood: ["shawerma", "pizza"]
};
const store = {
        name: "Dark cafe",
        address: {
            buildingNumber: 30,
            street: "omar hamad st "
        }
    }
    //______________________________________________________
    //Q2
    // a- using a dot notation
const orderedSolarSystem = {
    Mercery: "first",
    Venus: "second",
    Earth: "third",
    Mars: "fourth",
};
orderedSolarSystem.Mars;
// b- using a bracket notation
const unorderedSolarSystem = {
    Mars: "fourth",
    Earth: "third",
    Mercery: "first",
    Venus: "second",
};
unorderedSolarSystem["Mars"]
    //______________________________________________________
    //Q3
const studentOne = {
    englishGrade: 80,
    scienceGrade: 90,
};
studentOne.math = 80;
studentOne.englishGrade = 90;
studentOne.AVG = studentOne.math + studentOne.englishGrade + studentOne.scienceGrade / 3;

const studentTwo = {
    englishGrade: 80,
    scienceGrade: 90,
};
studentTwo["math"] = 80;
studentTwo["englishGrade"] = 90;
studentTwo["AVG"] = studentTwo["math"] + studentTwo["englishGrade"] + studentTwo["scienceGrade"] / 3;


const objectKey = "key";
const ObjectValue = "value";

const object = {
    objectKey,
    ObjectValue
};
//return object.objectKey + object.ObjectValue;





/*--------------------Practice--------------------*/
//______________________________________________________
//Q1
const person1 = {
    name: "john",
    age: 20
};
const car = {
    brand: "Toyota",
    model: 2020
}
const employee = {
        name: "Jane",
        position: "developer"
    }
    //______________________________________________________
    //Q2
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
};
person.age = 23;
person.work = {
    postion: "deeloper",
    salary: 500
}


const employees = [{
        id: 1,
        name: {
            first: "John",
            last: "Doe",
        },
        position: "Designer",
    },
    {
        id: 2,
        name: {
            first: "Jane",
            last: "Doe",
        },
        position: "Engineer",
    },
];

employees[0].name.first;
employees[1].name.first;
employees.push({ id: 3, name: { first: "faisal", last: "altarteer" }, position: "Full-stack developer" });

const cars = {
    toyota: {
        name: "prius",
        model: 2019,
    },
    nissan: {
        name: "leaf",
        model: 2020,
    },
};
cars.toyota.model;
cars.nissan.model;
cars.toyota.model = 2020;
cars.mazda = { name: "zoom3", model: 2020 };
cars.mazda.isAutomatic = "True";
cars.toyota.isAutomatic = "True";
cars.nissan.isAutomatic = "false";



//______________________________________________________
//Q3
const createUser = function(firstName, lastName) {
    const createN = {
        fName: firstName,
        lName: lastName
    }
    return "firstName: " + createN.fName + "," + " lastName: " + createN.lName;

};

createUser("John", "Doe"); // => {firstName: "John", lastName: "Doe"}
createUser("Peter", "Brown"); // => {firstName: "Peter", lastName: "Brown"}
//______________________________________________________
//Q4
const createCar = function(brand, name, color) {
    const CarInfo = {
        cBrand: brand,
        cName: name,
        cColor: color
    }
    return "brand: " + CarInfo.cBrand + "," + "name: " + CarInfo.cName + "," +
        "color: " + CarInfo.cColor;
};
createCar("Toyota", "Prius", "Black"); // => {brand: "Toyota", name: "Prius", color: "Black"}
createCar("Audi", "A1", "Blue"); // => {brand: "Audi", name: "A1", color: "Blue"}
//______________________________________________________
//Q5
const getFullName = function(person) {
    return person.first + " " + person.middle + " " + person.last
};

getFullName({ first: "Elon", middle: "Reeve", last: "Musk" }); // => "Elon Reeve Musk"
getFullName({ first: "John", middle: "Mark", last: "Doe" }); // => "John Mark Doe"
//______________________________________________________
//Q6
const olderThan = function(personOne, personTwo) {
    if (personOne.age > personTwo.age) {
        return personOne.name + " is older than " + personTwo.name
    } else if (personTwo.age > personOne.age) {
        return personTwo.name + " is older than " + personOne.name
    } else if (personOne.age == personTwo.age) {
        return personOne.name + " is as old as " + personOne.name
    }

};

olderThan({ name: "John", age: 23 }, { name: "Jane", age: 26 }); // => "Jane is older than John"
olderThan({ name: "Mark", age: 30 }, { name: "Smith", age: 25 }); // => "Mark is older than Smith"
olderThan({ name: "Marry", age: 20 }, { name: "Sarah", age: 20 }); // => "Marry is as old as Sarah"
//______________________________________________________
//Q7
const isPropertyOf = function(string, object) {
    if (typeof string === object) {
        return "true"
    } else {
        return "false"
    }
};

isPropertyOf("hello", { hello: "world" }); // => true
isPropertyOf("world", { hello: "world" }); // => false
//______________________________________________________
//Q8
const numberOfKeys = function(object) {
    const result = Object.keys(object).length;
    return result;

};

numberOfKeys({ name: "James", age: 27 }); // => 2
numberOfKeys({ fruit: "orange", vegetable: "broccoli", animal: "cat" }); // => 3
//______________________________________________________
//Q9
const valuesToString = function(object) {
    return Object.values(object);

};

valuesToString({ name: "James", age: 27 }); // => "James 27"
valuesToString({ fruit: "apple", vegetable: "asparagus", animal: "dog" }); // => "apple asparagus dog"
//______________________________________________________
//Q10
const keyInObject = function(object, key) {
    if (object.hasOwnProperty(key)) {
        return true
    } else {
        return false

    }
};

keyInObject({ order: "chicken sandwich", orderId: 0, quantity: 1 },
    "orderId"
); // => true
keyInObject({ order: "hamburger with fries", orderId: 1, quantity: 2 },
    "name"
); // => false





/*--------------------Extra Practice--------------------*/
//______________________________________________________
//Q1
// HINT: read about the delete operator
const family = {
    name: "John",
    children: [{
            name: "Bill",
            children: [{
                    name: "Mark",
                    children: [],
                },
                {
                    name: "Sarah",
                    children: [{
                            name: "Smith",
                            children: [],
                        },
                        {
                            name: "Stan",
                            children: [],
                        },
                    ],
                },
                {
                    name: "Samuel",
                    children: [],
                },
            ],
        },
        {
            name: "Jane",
            children: [],
        },
    ],
};

family.children[0].children[1].children;
//family.children[0].children[2].children = [{ name: Marry }, { name: Gwen }]
//______________________________________________________
//Q2
const createIceCream = function(coneType, iceCreamFlavour, topping) {
    if (coneType != null && iceCreamFlavour != null && topping != null) {
        const iceCream = {

            coneT: coneType,
            iceCreamF: iceCreamFlavour,
            topp: topping
        }
        return "coneType: " + coneType + ", " + "flavour: " + iceCream.iceCreamF + ", " + "topping: " + topping;
    } else if (coneType == null && iceCreamFlavour != null && topping != null) {
        return "coneType: none" + ", " + "flavour: " + iceCreamFlavour + ", " + "topping: " + topping;
    } else if (coneType != null && iceCreamFlavour == null && topping != null) {
        return "coneType: " + coneType + ", " + "flavour: none " + ", " + "topping: " + topping;
    } else if (coneType != null && iceCreamFlavour != null && topping == null) {
        return "coneType: " + coneType + ", " + "flavour: " + iceCreamFlavour + ", " + "topping: none";
    }
};
createIceCream("wafer cone", "chocolate"); // => {coneType: "wafer cone" flavour: "chocolate", topping: "none"}
createIceCream("waffle cone", "vanilla", "chocolate syrup"); // => {coneType: "waffle cone", flavour: "vanilla", topping: "chocolate syrup"}
createIceCream("sugar cone", "strawberry", "cherry"); // => {coneType: "sugar cone", flavour: "strawberry", topping: "cherry"}
//______________________________________________________
//Q3
const employeeOne = {
    id: 0,
    name: "John",
    position: "",
};

const employeeTwo = {
    id: 1,
    name: "Jane",
    position: "Developer",
};

if (employeeOne.id) {
    console.log(employeeOne.name);
}
//Give u the name of employee one id 0 john

if (employeeTwo.id) {
    console.log(employeeOne.name);
}
// give u the same john because u write in console employeeOne

if (employeeOne.position) {
    console.log(employeeOne.name);
}
//this should write console.log(employeeOne.position); to give john position and there no data inside u should do that too employeeOne.position = "Mobile dev"

if (employeeTwo.position) {
    console.log(employeeOne.name);
}
//this should write console.log(employeeTow.position); to give jane position


if (employeeOne.salary) {
    console.log(employeeOne.name);
}
//there is no salary in ur obj u should do this- employeeOne.salary = 100 for ex- anddo another one for employee two

//______________________________________________________
//Q4
// things to validate:
// 1- length of the email is greater than or equal to 6
// 2- length of the password is greater than or equal to 8
// 3- email contains `@` and `.com`
// 4- the user must be in the users object
// 5- both of the passwords match
// 6- when you compare information make sure to reference the users object and access the value form there
const users = {
    mrpotato: {
        email: "Mr.potato@gmail.com",
        password: "LonelyPotato",
    },
    thewiseman: {
        email: "wiseMan9999@gmail.com",
        password: "12345678",
    },
};

const isValidUser = function(loginInfo) {
    users.mrpotato.name = "MrPotato"
    users.thewiseman.name = "Thewiseman"

    loginInfo = {
        user1: {
            username1: users.mrpotato.name,
            email1: users.mrpotato.email,
            pass1: users.mrpotato.password
        },
        user2: {
            username2: users.thewiseman.name,
            email2: users.thewiseman.email,
            pass2: users.thewiseman.password
        }

    }
    if (loginInfo.user1.email1.length >= 6 && loginInfo.user1.pass1.length >= 10 && loginInfo.user1.pass1 == loginInfo.user1.pass1 ||
        loginInfo.user2.email2.length >= 6 && loginInfo.user2.pass2.length >= 10 && loginInfo.user2.pass2 == loginInfo.user2.pass2) {
        return "true";
    } else {
        return "false";
    }
};

isValidUser({
    username: "MrPotato",
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
}); // => true

isValidUser({
    username1: "MrPotato",
    email1: "mr.potato@gmail.com",
    pass1: "Lonely",
}); // => false

isValidUser({
    username: "MrPotato",
    email: "mr.potato.gmail.com",
    password: "LonelyPotato",
}); // => false