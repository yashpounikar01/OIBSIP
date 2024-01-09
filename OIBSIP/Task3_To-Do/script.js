// Task data structure
function Task(title, description) {
    this.title = title;
    this.description = description;
    this.dateAdded = new Date();
    this.completed = false;
  }
  
  // Array to store tasks
  let tasks = [];
  
  // Function to add a new task
  function addTask() {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
  
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
  
    if (title === "" || description === "") {
      alert("Please enter both title and description.");
      return;
    }
  
    const newTask = new Task(title, description);
    tasks.push(newTask);
  
    updateTaskLists();
    clearForm();
  }
  
  // Function to update the task lists
  function updateTaskLists() {
    const pendingList = document.getElementById("pendingList");
    const completedList = document.getElementById("completedList");
  
    // Clear existing lists
    pendingList.innerHTML = "";
    completedList.innerHTML = "";
  
    // Update Pending and Completed Lists
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${task.title}</strong> - ${task.description} (Added: ${task.dateAdded.toLocaleString()})`;
  
      if (task.completed) {
        li.classList.add("completed");
        completedList.appendChild(li);
      } else {
        
        const completeButton = document.createElement("button");
        completeButton.innerText = "Mark Complete";
        completeButton.onclick = () => markComplete(task);
        li.appendChild(completeButton);
  
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleteTask(task);
        li.appendChild(deleteButton);
  
        pendingList.appendChild(li);
      }
    });
  }
  
  // Function to mark a task as complete
  function markComplete(task) {
    task.completed = true;
    updateTaskLists();
  }
  
  // Function to delete a task
  function deleteTask(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      updateTaskLists();
    }
  }
  
  // Function to clear the add task form
  function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
  
  // Initial update
  updateTaskLists();
  