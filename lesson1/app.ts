export { }
class Person {
    identity() {
        console.log('Every person has an identity');
    }
    sleep() {
        console.log('Every Person sleep');

    }
};

const person = new Person();

person.identity();

person.sleep();


