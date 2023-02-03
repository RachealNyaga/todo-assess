let completedTasks = document.querySelector("#completed-tasks");
let uncompletedTasks = document.querySelector("#Uncompleted-tasks");
fetch("https://dummyjson.com/todos")
    .then(function(promise) {
        console.log(promise);
        promise.json()
            .then(function(response) {
                 
                console.log(response);
                
                let todos = response.todos;
               
                todos.forEach(function(todo) {
                    if(todo.completed) { 
                        completedTasks.innerHTML += `<li>
                            <h5>${todo.todo}</h5>
                            </li>`
                    } else { 
                        uncompletedTasks.innerHTML += `<li>
                            <h5>${todo.todo}</h5>
                            </li>`
                    }
                })
            })
            .catch(function(error) {
                console.log(error)
                document.querySelector(".error").innerHTML = error.message;
            })
    })
    .catch(function(error) {
        console.log(error);
        document.querySelector(".error").innerHTML = error.message;
    })