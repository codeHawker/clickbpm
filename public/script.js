let bpmButton = document.getElementById("bpm-button") 
let buttonText = document.getElementById("bpm-button")
let currentbpmText = document.getElementById("current-bpm")
let click = 0;
let curTime, prevTime, dt, bpm, aveInt;
let dtArray = [];


bpmButton.onclick = () => {
    curTime = Date.now(); //Records the current time
    if(prevTime){
        dt = (curTime - prevTime)/1000;//Calcuate time elapsed since last click
        //Checks this value is reasonable
        dtArray.push(dt) //Saves the value to time elapsed array
        if(dtArray.length > 8){ //Makes sure the array is no longer than 8 increments
            dtArray.shift()
        }
        aveInt = average(dtArray) //Averages the intervals
        bpm = 60/aveInt //Calculates the BPM
        currentbpmText.innerHTML = 'Current BPM: ' + bpm.toFixed(1) //Updates the bpm 
    
    }
    prevTime = curTime;
    incrimentClick() //incriments the number on the click button

}

const incrimentClick = () => {
    click ++
    if(click>4){
        click = 1
    }
    buttonText.innerHTML = click;
}

const average = (array) => {
    return array.reduce((a,b) => (a+b)) / array.length;
}