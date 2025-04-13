import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fdf5e6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const AddButton = styled(Button)`
  background-color: #008000;
  color: white;
`;

const EditButton = styled(Button)`
  background-color: #008000;
  color: white;
`;

const SaveButton = styled(Button)`
  background-color: #008000;
  color: white;
`;

const DeleteButton = styled(Button)`
  background-color: #ff4444;
  color: white;
`;

const ClearButton = styled(Button)`
  background-color: #ff4444;
  color: white;
  margin: 0 auto;
  display: block;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #e8d1c5;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const TodoText = styled.div`
  flex: 1;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos, "todos");
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState([]);
  console.log(editingId, "editingId");
  const [editValue, setEditValue] = useState({});
  console.log(editValue, "editValue");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const saveTodo = (id) => {
    if (editValue[id]) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editValue[id] } : todo
        )
      );
    }
    setEditingId(editingId?.filter((editId) => editId !== id));
    const newEditValues = { ...editValue };
    delete newEditValues[id];
    setEditValue(newEditValues);
  };

  const startEditing = (id, text) => {
    setEditingId([...editingId, id]);
    setEditValue({ ...editValue, [id]: text });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((val) => val.id !== id));
    setEditingId(editingId?.filter((editId) => editId !== id));
    const newEditValues = {...editValue};
    delete newEditValues[id];
    setEditValue(newEditValues)
  };

  const clearList = () => {
    setTodos([]);
    setEditValue({});
    setEditingId([]);
  };
  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="add a todo here"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <AddButton onClick={addTodo}>Add Item</AddButton>
      </InputContainer>
      <Title>TODO List </Title>
      {todos?.map((todo) => (
        <TodoItem key={todo.id}>
          {editingId.includes(todo.id) ? (
            <>
              <Input
                type="text"
                value={editValue[todo.id] || ""}
                onChange={(e) =>
                  setEditValue({ ...editValue, [todo.id]: e.target.value })
                }
              />
              <SaveButton onClick={() => saveTodo(todo.id)}>Save</SaveButton>
            </>
          ) : (
            <>
              <TodoText>{todo.text}</TodoText>
              <EditButton onClick={() => startEditing(todo.id, todo.text)}>
                Edit
              </EditButton>
            </>
          )}
          <DeleteButton onClick={() => deleteTodo(todo.id)}>
            Delete
          </DeleteButton>
        </TodoItem>
      ))}
      {todos.length > 0 && (
        <ClearButton onClick={clearList}>ClearList</ClearButton>
      )}
    </Container>
  );
};

export default Todo;
