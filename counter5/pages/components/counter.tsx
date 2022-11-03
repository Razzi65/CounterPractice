import { useState } from "react"
import Button from "./button"

const Counter = () => {

    const [age, setage] = useState(0)
    const getage = () => {
        setage(age + 1)
    }

    const [sibling, getsibling] = useState(0)

    const getsiblings = () => {
        getsibling(sibling + 1)
    }


    return (<div>

        Today i am {age} years old. <br />
        I have {sibling} siblings.  <br />

        <Button name='Get Age' increment={() => getage()} />
        <Button name='Get Sibling' increment={() => getsiblings()} />
        <br/> 

        <Button name='Reset Sibling' increment={() => getsibling(0)} />
        <Button name='Reset Age' increment={() => setage(0)} />


    </div>
    )
}

export default Counter