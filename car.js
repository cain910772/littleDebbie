

const carFactory = (make, model,color,miles,shape) =>{
let myCars ={
    make:make,
    model:model,
    color:color,
    miles:miles,
    shape:shape
}
return myCars;
}



const makeCars =()=>{

let car1 = carFactory("Honda","Accord","Red","126000","Fair")
console.log(car1);

let car2 = carFactory("Mazda","Miata","Black","25000","Good")
console.log(car2);

const car = [car1,car2]

return car

}







function populateDB(allTheCars){
const stringifiedDatabase = JSON.stringify(allTheCars)
            localStorage.setItem("car", stringifiedDatabase)
    }  
//  const loadDatabase = function (localStorageKey) {
//        const databaseString = localStorage.getItem(localStorageKey)
    
//         return JSON.parse(databaseString)
//     }
    
    
    
    