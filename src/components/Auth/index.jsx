import { useState } from "react"

const Login = property => {

    const [name, setName] = useState('Coding Ninjas')

    const submitHandler = event => {
        event.preventDefault()

        fetch( '', { method: 'POST', body: JSON.stringify() } )
    }

    const setNameHandler = event => {
        setName(event.target.value)
    }

    console.log("Props in Login component", property)

    return <>
        <h1> {property.heading} </h1>
        <form onSubmit={submitHandler} >
            <input name="username" value={name} onChange={ setNameHandler}  />
            <button> Submit </button>
        </form>
    </>

}

export default Login