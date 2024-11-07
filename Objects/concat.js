let dic1={1:10, 2:20}
let dic2={3:20, 4:40}
let dic3={4:50,6:60}

//let result = Object.assign({},dic1,dic2,dic3);
let result = {...dic1,...dic2,...dic3} // spread operator
console.log(result);