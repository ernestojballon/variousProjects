//object 

const computer = (ram=0,cpu=2)=>{
    let _ram = ram
    let _cpu = cpu
    let cost = ram + cpu
    return {
        getRam: ()=>{
            return _ram
        },
        setRam: (ram)=>{
            _ram = ram
        },
        getCpu: ()=>{
            return _cpu
        },
        setCpu: (cpu)=>{
            _cpu = cpu
        },
        getCost:()=>{
            return cost
        }
    }
}
VideoCard = ()=>{
    return {
        setVideoCard:(video)=>{
            _video = video
        },
        getVideoCard:()=>{
            return _video
        }
    } 
}
Database = ()=>{
    return{
        setSsd:(ssd)=>{
            _ssd = ssd
        },
        getSsd:()=>{
            return _ssd
        }
    }
}
const gamerComputer = (computer,video=0)=>{
    let gamer = Object.assign(computer,VideoCard())
    gamer.setVideoCard(video)
    return gamer
}
const databaseComputer = (computer,ssd=0)=>{
    let database = Object.assign(computer,Database())
    database.setSsd(ssd)
    return database
}
const gamer = gamerComputer(computer(2,3),4)
const database = databaseComputer(gamer,1)

console.log(gamer.getRam())
console.log(gamer.getCpu())
console.log(gamer.getVideoCard())
console.log(gamer.getCost())


// console.log(database.getRam())
// console.log(database.getCpu())
// console.log(database.getSsd())

