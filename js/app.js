document.getElementById("mobile-button").addEventListener("click", function(){
    const taskNumber = document.getElementById("task-assign").innerHTML;
    const taskNumberValue = parseInt(taskNumber);
    const result = taskNumberValue - 1;
    document.getElementById("task-assign").innerHTML = result;
})