import { addTask, deleteTask, toggleComplete } from "./todo";

describe("To-Do App Functions", () => {

  // -------------------------
  // ADD TASK TESTS
  // -------------------------
  describe("addTask", () => {

    test("should add a valid task", () => {
      const tasks = [];
      const result = addTask(tasks, "Learn Jest");

      expect(result.length).toBe(1);
      expect(result[0].text).toBe("Learn Jest");
      expect(result[0].completed).toBe(false);
    });

    test("should not add empty task (edge case)", () => {
      const tasks = [];
      const result = addTask(tasks, "");

      expect(result.length).toBe(0);
    });

    test("should not add task with only spaces", () => {
      const tasks = [];
      const result = addTask(tasks, "   ");

      expect(result.length).toBe(0);
    });

  });

  // -------------------------
  // DELETE TASK TESTS
  // -------------------------
  describe("deleteTask", () => {

    test("should delete task by id", () => {
      const tasks = [
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" }
      ];

      const result = deleteTask(tasks, 1);

      expect(result.length).toBe(1);
      expect(result.find(t => t.id === 1)).toBeUndefined();
    });

    test("should handle invalid id gracefully", () => {
      const tasks = [{ id: 1, text: "Task 1" }];

      const result = deleteTask(tasks, 99);

      expect(result.length).toBe(1);
    });

    test("should handle empty task list", () => {
      const result = deleteTask([], 1);

      expect(result).toEqual([]);
    });

  });

  // -------------------------
  // TOGGLE COMPLETE TESTS
  // -------------------------
  describe("toggleComplete", () => {

    test("should toggle task completion from false to true", () => {
      const tasks = [{ id: 1, completed: false }];

      const result = toggleComplete(tasks, 1);

      expect(result[0].completed).toBe(true);
    });

    test("should toggle task completion from true to false", () => {
      const tasks = [{ id: 1, completed: true }];

      const result = toggleComplete(tasks, 1);

      expect(result[0].completed).toBe(false);
    });

    test("should not modify list if id not found", () => {
      const tasks = [{ id: 1, completed: false }];

      const result = toggleComplete(tasks, 99);

      expect(result).toEqual(tasks);
    });

  });

}); 