function AddExpense(){
    return(
        <div>
            <h2 className='h2-header'>Add New Transaction</h2>
            <hr/>
            <form>
                <div className='form-element'>
                    <label htmlFor='description' className='form-label'>Description</label><br/>
                    <input id='description' type='text' ></input>
                </div>
                <div className='form-element'>
                    <label htmlFor='amount' className='form-label'>Amount</label><br/>
                    <input id='amount' type='number'></input>
                </div>
            </form>
        </div>
    )
}

export default AddExpense