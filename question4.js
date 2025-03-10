let task = [];

function addtask(id, name, description){
    task.push({id, name, description});
}

function viewtask(){
    return task;
}

function updatetask (newid, newname, description){
    const task = task.find ( task => task.id ===id);
    if (task) {
        task.name = newname;
        task.description = description;
    }
}

function deletetask(id){
    task=task.filter(task = task.id !==id);
}
