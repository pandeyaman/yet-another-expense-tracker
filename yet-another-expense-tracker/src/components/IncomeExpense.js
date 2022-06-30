function IncomeExpense(){
    return(
        <div className='income-expense-container'>
            <div className='child-container'>
                <p className='p-header'>INCOME</p>
                <span className='span-amount amt-income'>&#8377;0.00</span>
            </div>
            <div className='hr'></div>
            <div className='child-container'>
                <p className='p-header'>EXPENSE</p>
                <span className='span-amount amt-expense'>&#8377;0.00</span>
            </div>
        </div>
    )
}

export default IncomeExpense