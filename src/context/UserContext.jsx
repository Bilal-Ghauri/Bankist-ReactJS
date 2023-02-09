import React, {createContext ,useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext()

const UserContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [users , setUsers] = useState([
        {
            id :1,
            name : "Bilal Ghauri",
            pincode : 11,
            
            picture : 'https://media.istockphoto.com/photos/portrait-of-smiling-arab-man-using-smartphone-at-home-picture-id1369011740?b=1&k=20&m=1369011740&s=170667a&w=0&h=3tI9csYFwmAosckeRKv6E4neeOcZ3BnywRomLZtwNpA=',
            totalBalance : 200,
            Transactions : {
                deposit : [
                    {
                        name : 'Safdar Azeem ',
                        amount : 100,
                        category : 'Deposit',
                        picture : 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                    }
                ],
                withdraw : [
                    {
                        name : 'Ali Khan',
                        amount : 100,
                        category : 'withDraw',
                        picture : 'https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY='
                    }
                ]
            }
        },
        {
            id :2,
            name : "Safdar Azeem",
            pincode : 22,
            picture : 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=',
            totalBalance : 500,
            Transactions : {
                deposit : [
                    {
                        name : 'Bilal Ghauri',
                        amount : 200,
                        category : 'Deposit',
                        picture : 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                    }
                ],
                withdraw : [
                    {
                        name : 'Ali Khan',
                        amount : 300,
                        category : 'withDraw',
                        picture : 'https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY='
                    }
                ]
            }
        },
        {
            id :3,
            name : "Ali Khan",
            pincode : 33,
            picture : 'https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-smartphone-to-send-text-messages-picture-id1358205700?b=1&k=20&m=1358205700&s=170667a&w=0&h=9pXGgsARkOerFs8_XloUCdGhsQXYKyMntJlgDliOEtY=',
            totalBalance : 800,
            Transactions : {
                deposit : [
                    {
                        name : 'Safdar Azeem ',
                        amount : 100,
                        category : 'Deposit',
                        picture : 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                        
                    }
                ],
                withdraw : [
                    {
                        name : 'Bilal Ghauri',
                        amount : 100,
                        category : 'withDraw',
                        picture : 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                    }
                ]
            }
        }
        
    ])
    const [isUserLogin , setIsUserLogin] = useState(false)
    const [user ,setUser] = useState(null)

    useEffect(() => {
        if(localStorage.getItem('user')){
            setIsUserLogin(true)
            setUser(users.find(u => u.id == Number(localStorage.getItem('user'))))
            navigate('/')
        }
    }, [])
    
    

    const loginUser = (name , pin)=> {
        let user = users.find(user => user.name == name)
        if(!user){
            return alert('User does not Exist')
        }
        if(String(user.pincode) !== String(pin)){
            return alert('Pincode is not Valid')
        }
        setUser(user)
        
        localStorage.setItem('user', user.id)
        setIsUserLogin(true)
        console.log(users);
    }

    const logoutUser = ()=> {
        setIsUserLogin(false)
        setUser(null)
        localStorage.removeItem('user')
        navigate('/login')
    }

    const withDrawAmount = (name , amount)=>{
        let userFind = users.find(user => user.name == name)
        if(!userFind){
            return alert('User does not Exist')
        }

        if(Number(amount) > Number(user.totalBalance)){
            return alert('You dont have enough money to transfer')
        }

        if(name == user.name){
            return alert('You can\'t send money yourself ')
        }

        userFind.totalBalance = Number(userFind.totalBalance) + Number(amount)
        userFind.Transactions.deposit.push({
            id : userFind.Transactions.deposit.length + 1,
            amount : amount,
            category : 'Deposit',
            name : user.name,
            picture : user.picture
        })

        console.log('userfind' ,userFind);
        console.log(users);

        setUser({
            
                ...user,
                totalBalance : Number(user.totalBalance) - Number(amount),
                Transactions : {
                    ...user.Transactions,
                    withdraw: [
                        ...user.Transactions.withdraw,
                        {
                            id : user.Transactions.withdraw.length + 1,
                            category : 'withDraw',
                            amount : amount , 
                            name : userFind.name,
                            picture : userFind.picture
                        }
                    ]
                }
            
        })
        console.log("user" ,user);

        setUsers(users.map( u => {
            if(u.id == userFind.id){
                return userFind
            }else if(u.name == user.id){
                return user
            }else{
                return u
            }
        }))

        console.log(users);
        // let updateUserTransaction = users.find(u => u.name == userFind.name)
        // console.log(updateUserTransaction.name);
        // let updatedDeposits = {
        //     ...updateUserTransaction, 
        //     totalBalance : Number(updateUserTransaction.totalBalance) + Number(amount),
        //     Transactions : {
        //         ...updateUserTransaction.Transactions,
        //         deposit : [
        //             ...updateUserTransaction.Transactions.deposit,
        //             {
        //                 ...user,
        //                 amount : amount,
        //                 category : 'Deposit'
        //             }
        //         ],
        //     }
        // }
        // console.log(updatedDeposits);
        // // updateUserTransaction.Transactions.deposit.push({
        // //     ...user,
        // //     totalBalance : updateUserTransaction.totalBalance + amount,
        // //     amount : amount,
        // //     category : 'Deposit'
        // // })

        // let logger = {
        //     ...user, 
        //     totalBalance : Number(user.totalBalance) - Number(amount),
        //     Transactions : {
        //         ...user.Transactions,
        //         deposit : [
        //             ...user.Transactions.deposit,
        //         ],
        //         withdraw: [
        //             ...user.Transactions.withdraw,
        //             {
        //                 ...userFind,
        //                 amount : amount,
        //                 category : 'withDraw'
        //             }
        //         ]
        //     }

        // }

        
        
        // let updatedResult = users.map(u => {
        //     if(u.name == updateUserTransaction.name){
        //         return updatedDeposits
        //     }else if(u.name == user.name){
        //         return logger
        //     }else{
        //         return u
        //     }
        // })
        // console.log(updatedResult);
        // setUsers(updatedResult)

        
    }

  return (
    <Context.Provider value={{
        users : users,
        isUserLogin : isUserLogin,
        user : user,
        loginUser,
        logoutUser,
        withDrawAmount
    }}>
        {children}
    </Context.Provider>
  )
}

export default UserContextProvider