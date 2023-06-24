import { useRef, useState,useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = props =>{
    const cartCtx = useContext(CartContext)
    
    const [amountIsValid, setAmountIsValid] = useState(true)
    const inputAdd = {
        id: 'amount_'+props.id,
        type: "number",
        min: '1',   
        max: '5',
        step: '1',
        defaultValue: '1'
    } 

    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value 
        const enteredAmountNumber = +enteredAmount 
        
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
          ) {
            setAmountIsValid(false);
            return;
          }
          
        props.onAddToCart(enteredAmountNumber);
        console.log("props :",props);

    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={inputAdd} />

            <button>+ Add </button>
            {!amountIsValid && <p>Please enter a valid quantity, between 1 to 5</p>}
        </form>
    )
}

export default MealItemForm