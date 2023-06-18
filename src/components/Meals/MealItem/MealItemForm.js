import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const inputAdd = {
    id: 'amount',
    type: "number",
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
} 
const MealItemForm = () =>{
    return(
        <form className={classes.form}>
            <Input label="Quantity" input={inputAdd} />
            <button>+ Add </button>
        </form>
    )
}

export default MealItemForm