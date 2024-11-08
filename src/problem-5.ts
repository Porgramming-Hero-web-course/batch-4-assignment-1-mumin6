type Person = {
    name: string;
    age: number;
}
const getProperty = <Person, K extends keyof Person> (person: Person, key:K):Person[K] => {
    return person[key]
}
console.log(getProperty(person, "name"));


