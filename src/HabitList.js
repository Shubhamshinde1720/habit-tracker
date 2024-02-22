// HabitList.js
import React from 'react';

const HabitList = ({ habits, onToggleStatus, onRemoveHabit }) => {
  return (
    <ul>
      {habits.map((habit, index) => (
        <li key={index}>
          {habit.name} - {habit.status}
          <div>
            <button onClick={() => onToggleStatus(index, 'Done')}>DONE</button>
            <button onClick={() => onToggleStatus(index, 'Not done')}>NOT DONE</button>
            <button onClick={() => onToggleStatus(index, 'None')}>NONE</button>
            <button onClick={() => onRemoveHabit(index)}>REMOVE</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
