persons = [{ name: 'joe', age: 10 }, { name: 'jane', age: 12 }, { name: 'jules' }, { name: 'johan' } ];

const filter1 = persons.filter((p) => { return !p.age });
const filter2 = persons.filter((p) => { return !!p.age });

console.log(filter1)
console.log(filter2)