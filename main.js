



const myFactory = (name,mascot,costPerBox,costPerOne,calories)=>{
 let littleDebbie ={
    name:name,
    mascot:mascot,
    costPerBox:costPerBox,
    costPerOne:costPerOne,
    calories:calories,
}
return littleDebbie;

}


const makeCakes = ()=>{


const honeybuns =
myFactory("honeybuns","little debbie","1.99",".50" ,"330")


const nuttyBuddy = 
myFactory("nuttyBuddy","little Debbie","1.99",".50","350")



const myCakes =[honeybuns,nuttyBuddy]
return myCakes

}

function populateDB(allTheCake){
    const stringifiedDatabase = JSON.stringify(allTheCake)
                localStorage.setItem("myCakes", stringifiedDatabase)
        }  
    

