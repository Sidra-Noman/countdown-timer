#! /usr/bin/env node
// In this project, you will build a countdown timer using the date module.
import{differenceInSeconds}from"date-fns"
import inquirer from  "inquirer"


const res = await inquirer.prompt({

    name : "userInput",
    type : "number",
    message :"Enter amount of second",
    validate:(input)=>{
        if(isNaN(input)){
            return "Please enter valid number"

        }else if(input>60){
            return "Second must within 60"
    }
    else{
        return true;
    }
}
});

let input =res.userInput
function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds()+val);
    const intervalTime = new Date(intTime);
       setInterval(()=>{
        const currentTime = new Date()      //time difference
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if(timeDiff<=0){
            console.log("Time has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)     //To show minutes
        const sec = Math.floor(timeDiff%60);
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)
       },1000);
}
startTime(input);
