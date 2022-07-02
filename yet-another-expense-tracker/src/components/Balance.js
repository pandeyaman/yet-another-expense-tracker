function Balance(props){

    return(
        <div>
            <h2 className='h2-header'>Your Current Balance</h2>
            <span className='current-bal'>&#8377;{props.balance}</span>
        </div>
    )
}

export default Balance