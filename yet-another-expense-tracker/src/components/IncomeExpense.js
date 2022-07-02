function IncomeExpense(props){

    let incomeArr= [],expenseArr=[];

    props.expenseList.forEach((element)=>{
        if(element.amount>0){
            incomeArr.push(element)
        }
        else{
            expenseArr.push(element)
        }
    })

    let totalIncome = incomeArr.reduce((acc,curr)=>{
        return acc+Number(curr.amount)
    },0)
    
    let totalExpense = expenseArr.reduce((acc,curr)=>{
        return acc+Number(curr.amount)
    },0)

    let totalBalance = totalIncome - Math.abs(totalExpense) 

    return(
        <div className='income-expense-container'>
            <div className='child-container'>
                <p className='p-header'>INCOME</p>
                <span className='span-amount amt-income' onChange={props.setbalance(totalBalance)}>&#8377;{totalIncome}</span>
            </div>
            <div className='hr'></div>
            <div className='child-container'>
                <p className='p-header'>EXPENSE</p>
                <span className='span-amount amt-expense' onChange={props.setbalance(totalBalance)}>&#8377;{totalExpense}</span>
            </div>
        </div>
    )
}

export default IncomeExpense