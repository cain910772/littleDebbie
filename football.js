
const teamFactory =(name,color,mascot,stadium)=>{
    const team ={
    name:name,
    color:color,
    mascot:mascot,
    stadium:stadium
    }
return team
}

const makeTeam =()=>{

    const Titans =teamFactory("Titans","Blue and White","Rex","Nissan Stadium")
    const Patriots = teamFactory("Patriots","White and Red","Patriot Phil","Gillette Stadium")

const footballer=[Titans,Patriots]


return footballer
}
function populateDB(allTheTeams){
    const stringifiedDatabase = JSON.stringify(allTheTeams)
                localStorage.setItem("team", stringifiedDatabase)
        }  