const app = Vue.createApp({
    data() {
      return {
        title: "Vue.js Feature Showcase",
        newTask: "",
        tasks: [] // Array of tasks
      };
    },
    computed: {
      // Computed property to count completed tasks
      completedTasks() {
        return this.tasks.filter(task => task.completed).length;
      },
      // Style for the "Clear All" button
      clearButtonStyle() {
        return {
          backgroundColor: this.tasks.length > 0 ? "#f44336" : "#ccc",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          cursor: this.tasks.length > 0 ? "pointer" : "not-allowed"
        };
      }
    },
    methods: {
      // Add a new task to the list
      addTask() {
        if (this.newTask.trim() !== "") {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = ""; // Clear input field
        }
      },
      // Toggle task completion status
      toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
      // Delete a task from the list
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      // Clear all tasks
      clearAll() {
        this.tasks = [];
      }
    }
  });
  
  app.mount("#app");
  