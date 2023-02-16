// Destructuring in JS ES6

// The old approach
var voxel = {x: 3.14, y: 100, z: 4.5}  

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// Using destructuring, assign values directly from an object
const {x, y, z} = voxel;
console.log(x);

// Using destructuring, assign values from an object 
// to a variable with a different name
const {x:a, y:b, z:c} = voxel;
console.log(b);

// Access nested objects and apply destructuring
const coordinates = {
    start: {x: 5, y: 10},
    end: {x: 6, y: -9}
};
const { start : {x: startX, y: startY}} = coordinates;
console.log(startX);

// Assign variables from arrays using destructuring
const [q, r] = [1, 2, 3, 4, 5];
console.log(q, r);