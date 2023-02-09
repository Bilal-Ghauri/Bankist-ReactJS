import React, {useState , useEffect , useContext} from 'react'
import { Context } from '../context/UserContext'

const Deposits = () => {
    const [loading , setLoading] = useState(true)
    let {user} = useContext(Context)
    // let user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    
    if(loading) {
        return <div className='w-100 mt-2 text-center'>
            <div class="spinner-border " role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
        </div>
      
    }
  return (
    <div>
        {user.Transactions.deposit.map(t => {
            return <div key={t} className="d-flex justify-content-between align-items-center p-1">
            <div className="d-flex  align-items-center">
                <img src={t.picture} alt="" className="person-img" style={{height : "40px"}}/>
                <h6 className='ms-2'>{t.name}</h6>
            </div>
            <div className="rounded-pill bg-success px-3 py-1 text-white d-flex  align-items-center"><span>Deposit</span></div>
            <div className="amount">{t.amount}$</div>
        </div>
        })}
        
    </div>
  )
}

export default Deposits