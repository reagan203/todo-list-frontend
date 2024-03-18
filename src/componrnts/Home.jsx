import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import { api } from "../utils/utils";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const createTask = async () => {
    try {
      const response = await api.post("/tasks", { title: newTaskTitle });
      setTasks([...tasks, response.data]);
      toast({
        title: "Task created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setNewTaskTitle("");
    } catch (error) {
      console.error("Error creating task:", error);
      toast({
        title: "Error creating task.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/task/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
      toast({
        title: "Task deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      toast({
        title: "Error deleting task.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Heading mb={4}>Task Manager</Heading>
      <VStack width="400px" spacing={4}>
        <Input
          placeholder="Enter task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <Button onClick={createTask}>Create Task</Button>
        {tasks.map((task) => (
          <Flex
            key={task.id}
            align="center"
            justify="space-between"
            borderWidth="1px"
            borderRadius="md"
            padding={4}
            width="100%"
          >
            <Text>{task.title}</Text>
            <text>{task.status}</text>
            <CloseButton onClick={() => deleteTask(task.id)} />
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

export default TaskManager;
