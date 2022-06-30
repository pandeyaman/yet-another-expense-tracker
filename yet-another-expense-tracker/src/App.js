import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddExpense from './components/AddExpense';
import IncomeExpense from './components/IncomeExpense'
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <AddExpense/>
      <ExpenseList/>
    </div>
  );
}

export default App;
