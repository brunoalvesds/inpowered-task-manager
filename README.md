# Inpowered Angular Task Manager

A simple Angular 10 application that demonstrates task management with reactive features and modular architecture.

## Features

- ✅ **Add Tasks** – Add new tasks using an input field and a button.
- ☑️ **Mark as Completed** – Toggle task completion using a checkbox with visual styling for completed items.
- 🔍 **Filter Tasks** – Filter the task list by **All**, **Completed**, or **Incomplete** using a dropdown.
- 🗑️ **Remove Tasks** – Delete tasks using a dedicated button.

### Bonus

- 💾 **Persist Tasks** – Save tasks to `localStorage` so they remain after a page reload.
- ❓ **Confirm Deletion** – Display a confirmation dialog before removing a task.

## Technical Stack

- **Angular 10**
- **RxJS** – Used for reactive task management and dynamic filtering.
- **Component-Based Architecture** – Includes a dedicated `TaskListComponent` for separation of concerns.
- **Basic CSS Styling** – Visually differentiates completed tasks.

## Setup

1. Install dependencies:

  ```bash
    npm install
  ```

2. Run the development server:
   
  ```bash
    ng serve
  ```

3. Open http://localhost:4200 in your browser.
