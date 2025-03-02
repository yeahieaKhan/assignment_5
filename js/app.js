document.getElementById("mobile-button").addEventListener("click", function () {
    alert("BOard update successfully");
    // task number
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;

    const taskDone = document.getElementById("task-done").innerHTML;
    const taskDoneNumer = parseInt(taskDone);
    const taskNumerAdd = taskDoneNumer + 1;
    document.getElementById("task-done").innerHTML =taskNumerAdd;
    if(taskNumerAdd > 28){
        alert("your have done all the task")
    }


    const mobileButtonFIx = document.getElementById("mobile-button-fix").innerHTML;
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
     
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    

    const activityLog =document.getElementById("activity-log");
    const div = document.createElement("div");
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${mobileButtonFIx} at ${hours}:${minutes}:${seconds} ${amPm}</p>
    `;

    activityLog.appendChild(div);


        this.disabled = true;
})







document.getElementById("add-pay").addEventListener("click", function(){
    alert("BOard update successfully");
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;
    
    const taskDone = document.getElementById("task-done").innerHTML;
    const taskDoneNumer = parseInt(taskDone);
    const taskNumerAdd = taskDoneNumer + 1;
    document.getElementById("task-done").innerHTML =taskNumerAdd;
    if(taskNumerAdd > 28){
        alert("your have done all the task")
    }
    

    const addPayTitle = document.getElementById("add-pay-titile").innerHTML;
    console.log(addPayTitle);




    const now = new Date();
    console.log(now);
    
    let hours = now.getHours();
    console.log(hours);
    
    const minutes = now.getMinutes().toString().padStart(2, "0");
    console.log(minutes);
    
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(seconds);
    
    const amPm = hours >= 12 ? "PM" : "AM";
    console.log(amPm);
    
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    console.log(hours);
    
    console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    const activityLog =document.getElementById("activity-log");
    console.log(activityLog)
    const div = document.createElement("div");
    console.log(div)
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${addPayTitle} at ${hours}:${minutes}:${seconds} ${amPm}</p>
    `;

    activityLog.appendChild(div);
    this.disabled = true;
   
})




document.getElementById("reaction-button").addEventListener("click", function(){
    alert("BOard update successfully");
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;
    
    const taskDone = document.getElementById("task-done").innerHTML;
    const taskDoneNumer = parseInt(taskDone);
    const taskNumerAdd = taskDoneNumer + 1;
    document.getElementById("task-done").innerHTML =taskNumerAdd;
    if(taskNumerAdd > 28){
        alert("your have done all the task")
    }
    

    const newReactions = document.getElementById("new-reaction").innerHTML;
    console.log(newReactions);




    const now = new Date();
    console.log(now);
    
    let hours = now.getHours();
    console.log(hours);
    
    const minutes = now.getMinutes().toString().padStart(2, "0");
    console.log(minutes);
    
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(seconds);
    
    const amPm = hours >= 12 ? "PM" : "AM";
    console.log(amPm);
    
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    console.log(hours);
    
    console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    const activityLog =document.getElementById("activity-log");
    console.log(activityLog)
    const div = document.createElement("div");
    console.log(div)
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${newReactions} at ${hours}:${minutes}:${seconds} ${amPm}</p>
    `;

    activityLog.appendChild(div);
    this.disabled = true;
   
})


document.getElementById("video-load-button").addEventListener("click", function(){
    alert("BOard update successfully");
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;
    
    const taskDone = document.getElementById("task-done").innerHTML;
    const taskDoneNumer = parseInt(taskDone);
    const taskNumerAdd = taskDoneNumer + 1;
    document.getElementById("task-done").innerHTML =taskNumerAdd;
    if(taskNumerAdd > 28){
        alert("your have done all the task")
    }
    

    const videoLoad = document.getElementById("video-load").innerHTML;
    console.log(videoLoad);




    const now = new Date();
    console.log(now);
    
    let hours = now.getHours();
    console.log(hours);
    
    const minutes = now.getMinutes().toString().padStart(2, "0");
    console.log(minutes);
    
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(seconds);
    
    const amPm = hours >= 12 ? "PM" : "AM";
    console.log(amPm);
    
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    console.log(hours);
    
    console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    const activityLog =document.getElementById("activity-log");
    console.log(activityLog)
    const div = document.createElement("div");
    console.log(div)
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${videoLoad} at ${hours}:${minutes}:${seconds} ${amPm}</p>
    `;

    activityLog.appendChild(div);
    this.disabled = true;
   
})




document.getElementById("ai-btn").addEventListener("click", function(){
    alert("BOard update successfully");
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;
    
    const taskDone = document.getElementById("task-done").innerHTML;
    const taskDoneNumer = parseInt(taskDone);
    const taskNumerAdd = taskDoneNumer + 1;
    document.getElementById("task-done").innerHTML =taskNumerAdd;
    if(taskNumerAdd > 28){
        alert("your have done all the task")
    }
    

    const aiSearch = document.getElementById("ai-search").innerHTML;
    console.log(aiSearch);




    const now = new Date();
    console.log(now);
    
    let hours = now.getHours();
    console.log(hours);
    
    const minutes = now.getMinutes().toString().padStart(2, "0");
    console.log(minutes);
    
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(seconds);
    
    const amPm = hours >= 12 ? "PM" : "AM";
    console.log(amPm);
    
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    console.log(hours);
    
    console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    const activityLog =document.getElementById("activity-log");
    console.log(activityLog)
    const div = document.createElement("div");
    console.log(div)
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${aiSearch} at ${hours}:${minutes}:${seconds} ${amPm}</p>
    `;

    activityLog.appendChild(div);
    this.disabled = true;
   
})





document.getElementById("review-btn").addEventListener("click", function(){
    alert("BOard update successfully");
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;
    
    const taskDone = document.getElementById("task-done").innerHTML;
    const taskDoneNumer = parseInt(taskDone);
    const taskNumerAdd = taskDoneNumer + 1;
    document.getElementById("task-done").innerHTML =taskNumerAdd;
    if(taskNumerAdd > 28){
        alert("your have done all the task")
    }
    

    const reviewTitle = document.getElementById("review-title").innerHTML;
    console.log(reviewTitle);




    const now = new Date();
    console.log(now);
    
    let hours = now.getHours();
    console.log(hours);
    
    const minutes = now.getMinutes().toString().padStart(2, "0");
    console.log(minutes);
    
    const seconds = now.getSeconds().toString().padStart(2, "0");
    console.log(seconds);
    
    const amPm = hours >= 12 ? "PM" : "AM";
    console.log(amPm);
    
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    console.log(hours);
    
    console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    const activityLog =document.getElementById("activity-log");
    console.log(activityLog)
    const div = document.createElement("div");
    console.log(div)
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${reviewTitle} at ${hours}:${minutes}:${seconds} ${amPm}</p>
    `;

    activityLog.appendChild(div);
    this.disabled = true;
   
})



// bg chage

function bgThemeColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.getElementById("bg-theme").addEventListener("click", function(){
    document.body.style.background = bgThemeColor();
})




// clear history

function clearHistory(deleteDistory){
    document.getElementById(deleteDistory).innerHTML = " ";
}