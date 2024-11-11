import { useRef, useState } from "react"
export default function Ewallet () {
const[balance , setbalance] = useState(0)
const[transactions, setTransactions] = useState([

])

localStorage.setItem("transactions" , JSON.stringify (transactions))

const amountInput = useRef()

const deposit = () =>{
  let amount = +amountInput.current.value;
  let obj = {beforeBalance: balance, type: "Deposit" ,amount: amount , afterBalance: balance + amount};
  transactions.push(obj);

setbalance(balance + amount)
localStorage.setItem("obj" , JSON.stringify (obj))


}

const widthdrow = () => {
  let amount = +amountInput.current.value;
  let obj = {beforeBalance: balance, type: "widthdrow" ,amount: amount , afterBalance: balance - amount};
  transactions.push(obj);
  setbalance(balance - amount )

  
}



  return (
    <div className="bg-success">
        <h1 className="bg-info">Blans : {balance}</h1>
        <input ref ={amountInput} placeholder="enter amount"  />
        <button onClick={deposit}>ايداع</button>
        <button onClick={widthdrow}>سحب</button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>-</th>
              <th>Balance Before</th>
              <th>type</th>
              <th>Amount</th>
              <th>Balance After</th>
            </tr>
          </thead>
          <tbody>
            {
             transactions.map  ((el, index)=>{
                return(
                <tr key={index}>
                   <th>{index+1}</th>
              <th>{el.beforeBalance}</th>
              <th>{el.type}</th>
              <th>{el.amount}</th>
              <th>{el.afterBalance}</th>  
                </tr>
           
         
                )
              })
            }
            
          </tbody>
        </table>
    </div>
  )
}
