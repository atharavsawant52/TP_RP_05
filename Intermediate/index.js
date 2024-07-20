const contactNo = [99999, 111111, 888888];



const updatedContactNo = contactNo.map((value) => "+91" + value);
console.log(updatedContactNo);


//for each
//includes
//filter
const ages = [32, 33, 16, 40];
const result = ages.filter((value)=>{
  return value >= 18;
})

console.log(result);


//join
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();

//splice
//reduce