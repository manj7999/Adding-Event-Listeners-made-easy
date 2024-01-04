// App.js
import React from 'react';
import Expenses from './Components/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 1, 4),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2023, 1, 4),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2024, 1, 4),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 1, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
