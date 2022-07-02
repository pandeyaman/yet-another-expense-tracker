import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddExpense from './components/AddExpense';
import IncomeExpense from './components/IncomeExpense'
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';

function App() {
  const expenseList = [
    {
        desc: 'A',
        amount: 10
    }, {
        desc: 'B',
        amount: 80
    }, {
        desc: 'C',
        amount: 50
    }
]

const [list, setlist] = useState(expenseList);
const [balance, setbalance] = useState(0);


  return (
    <div className="App">
      <Header/>
      <Balance balance={balance}/>
      <IncomeExpense expenseList={list} setbalance={setbalance}/>
      <AddExpense expenseList={list} setlist={setlist} />
      <ExpenseList expenseList={list}/>
    </div>
  );
}

export default App;
