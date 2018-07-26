
const getButton = document.querySelector("#database")
getButton.addEventListener("click",function(){
    const allcar = makeCars()
    populateDB(allcar)
})
const getButton2 = document.querySelector("#database2")
getButton2.addEventListener("click",function(){
    const allcake = makeCakes()
    populateDB(allcake)
})
const getButton3 = document.querySelector("#database3")
getButton3.addEventListener("click",function(){
    const myTeams = makeTeam()
    populateDB(myTeams)
})


