import React, { useEffect, useState } from "react";
import { getUsers, addUser, deleteUser } from "../services/userService";

export default function UserService() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: "", password: "", email: "" });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    
    setUsers(data);
  };

  const handleAdd = async () => {
    if (!newUser.username || !newUser.password|| !newUser.email) return;
    await addUser(newUser);
    setNewUser({ username: "", password: "", email: "" });
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Service</h2>

      <div className="mb-4">
        <input
          style={{ padding: "8px", flex: 1 }}
          className="border p-2 mr-2"
          placeholder="Name"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
        style={{ padding: "8px", flex: 1 }}
          className="border p-2 mr-2"
          placeholder="PassWord"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        
        <input
          style={{ padding: "8px", flex: 1 }}
          className="border p-2 mr-2"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>
          Add User
        </button>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center border-b py-2">
            <div>
              {user.username} ({user.email})
            </div>
            <button
              className="text-red-500"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
