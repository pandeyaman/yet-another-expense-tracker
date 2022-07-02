import {useState} from 'react'
function AddExpense(props) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    let list = props.expenseList
    
    const changeDescription = (e)=>{
        setDescription(e.target.value)
    }

    const changeAmount = (e) =>{
        setAmount(e.target.value)
    }

    const formSubmit = (e) =>{
        console.log('The data list ',list);
        list.push({desc:description,amount:amount})
        let newlist = list
        props.setlist([...newlist])
        console.log('The data list --> ',newlist);
        e.preventDefault()
    }

    return (
        <div>
            <h2 className='h2-header'>Add New Transaction</h2>
            <hr/>
            <form onSubmit={formSubmit}> 
                <div className='form-container'>
                    <div className='form-inputs'>
                        <div className='form-element'>
                            <label htmlFor='description' className='form-label' placeholder='Enter Description'>Description</label><br/>
                            <input id='description' type='text' onChange={changeDescription} value={description}></input>
                        </div>
                        <div className='form-element'>
                            <label htmlFor='amount' className='form-label'>Amount</label><br/>
                            <input id='amount' type='number' onChange={changeAmount} value={amount}></input>
                        </div>
                    </div>
                    <div className='form-submit'>
                        <button type='submit' className='btn-submit'>Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
