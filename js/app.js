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


    const mobileButtonFIx = document.getElementById("mobile-button-fix").innerHTML;
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    

    const activityLog =document.getElementById("activity-log");
    const div = document.createElement("div");
    div.innerHTML = `
        <p id="mobile-button-fix">you have completed the task ${mobileButtonFIx} at ${hours}:${minutes} ${amPm}</p>
    `;

    activityLog.appendChild(div);













        this.disabled = true;
})