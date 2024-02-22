// App.js
import React, { useState } from 'react';
import HabitList from './HabitList';
import './App.css';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim() !== '') {
      setHabits([...habits, { name: newHabit, status: 'None' }]);
      setNewHabit('');
    }
  };

  const toggleHabitStatus = (index, newStatus) => {
    const updatedHabits = [...habits];
    updatedHabits[index].status = newStatus;
    setHabits(updatedHabits);
  };

  const removeHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <div>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="ENTER A NEW HABIT"
        />
        <button onClick={addHabit}>ADD HABIT</button>
      </div>
      <HabitList habits={habits} onToggleStatus={toggleHabitStatus} onRemoveHabit={removeHabit} />
    </div>
  );
};

export default App;
