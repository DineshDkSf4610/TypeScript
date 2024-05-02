// let firstName: string = "Dylan"; // type string
// let lastName: string = "kumar";

// console.log(typeof firstName);
// console.log(typeof lastName);

// Basic Type

let id: number = 9;
let company: string = "Syncfusion";
let check: boolean = true;
let x: any;

let ids: number [] = [1,2,3,4,5];
let x1: any[] = [1,'s',true];

//Tuple
let employee: [number,string, boolean] = [3,"d",true];

//Tuple Array
let employees: [number,string, boolean][] = [
    [3,"d",true],
    [3,"d",true],
    [3,"d",true],
    [3,"d",true]    
];

//unio

let eid: string | number;

eid = 5;
eid = "did";

//enum

enum direction1 {
    // up = Assign value,
    up,
    down,
    left,
    right
}

console.log(direction1.left);
