const a = Promise.resolve(42);
a.then(value=> console.log(value));

const b = Promise.resolve('resolved');
b.then(value => console.log(value));

const c = Promise.reject(new Error('oops'));
c.catch(err=>{
    console.log(`Error: ${err.message}!`)
    console.log(err.stack);
});

const d = Promise.resolve({id:1, name: 'alice'});
d.then(value=>console.log(value));

const e = Promise.resolve({id: 1, name:'Alice'});
e.then(value=>(console.log(value.name)));

const f = Promise.reject(new Error('Invalid id'));
f.catch(err=> {
    console.log(`${err}`);
    console.log(err.stack);
});

const g = Promise.resolve(42);

g.then(value => {console.log(value);})
.catch(err=>{console.log(err);})
.finally(()=>{ console.log('Promise has settled');});

const h = Promise.resolve(21);

h.then(value=>console.log(value*2));

const i = Promise.reject(new Error('invalid value'));
i.catch(err =>{ console.log(err); return 0;})
.then(value=>console.log(value));

const promises = [
    Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)
];

Promise.all(promises).then(values=> {console.log(values)});

const promises2 = [
    new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
    new Promise(resolve => setTimeout(() => resolve('b'), 50)),
    new Promise(resolve => setTimeout(() => resolve('c'), 150))
  ];
  
  Promise.race(promises2)
    .then(firstResolvedValue => {
      console.log(firstResolvedValue); // This will log the first resolved value
    })

const j = Promise.resolve('World');
const k = ()=>new Promise((resolve) => setTimeout(() => resolve("Hello World"),1000));

j.then(originalValue => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Hello ${originalValue}`); // Concatenate 'Hello' to the original value
      }, 1000); // Resolve after 1 second (1000 milliseconds)
    });
  })
  .then(finalValue => {
    console.log(finalValue); // Log the final value
  })