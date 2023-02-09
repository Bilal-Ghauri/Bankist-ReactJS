import React , {useContext} from 'react'
import pic from '../images/mypic.jpg'
import { Context } from '../context/UserContext'


const WithDraws = () => {
  let {user} = useContext(Context)
  // let user = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
        {user.Transactions.withdraw.map(t=> {
          return <div className="d-flex justify-content-between align-items-center p-1">
          <div className="d-flex  align-items-center">
              <div><img src={t.picture} alt="" className="person-img" style={{height : "40px"}}/></div>
              <h6 className='ms-2'>{t.name}</h6>
          </div>
          <div className="rounded-pill bg-danger px-3 py-1 text-white d-flex  align-items-center"><span>WithDraw</span></div>
          <div className="amount">{t.amount}$</div>
      </div>
        })}
        
    </div>
  )
}

export default WithDraws