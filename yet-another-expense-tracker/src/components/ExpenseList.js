function ExpenseList(props) {

    const list = props.expenseList.map((item)=>{
        return (<div className='li-expenses'>
                 <li className='li-desc'>{item.desc}</li>
                 <li className='li-amt'>{item.amount}<span className='span-color-code'></span></li>
            </div>
        )
    })


    return (
        <div>
            <h2 className='h2-header'>Transactions</h2>
            <hr/>
            <ul className='ul-expenseList'>
                {list}
            </ul>
        </div>
    )
}

export default ExpenseList
