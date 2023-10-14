import React from 'react'


class Auth extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            title: 'A class component!',
            email: '',
            name: '',
            password: '',
            showHeading: true,
            students: [  ]
        }
    }



    emailHandler = event => {
        
        this.setState( { email: event.target.value },  () => console.log("the updated value", this.state.email) )
    }

    nameHandler = event => {
        this.setState( { name: event.target.value } )
    }

    passwordHandler = event => {
        this.setState( { password: event.target.value } )
    }

    showHeadingHandler = () => {

        this.setState( { showHeading: !this.state.showHeading } )

    }

    submitHandler = event => {
        event.preventDefault()

        const {title, email, password, name, showHeading} =this.state

        const payload = {
            email,
            password,
            name
        }

        console.log("payload", payload)

        // fetch( '', { method: 'POST', body: JSON.stringify(payload), headers: {} } )
    }

    componentDidMount = () => {

        console.log("Called upon on mounting!")

        fetch('https://jsonplaceholder.typicode.com/users')
        .then( value => value.json() )
        .then( parsedResponse => console.log("Parsed Response", parsedResponse) )


    }

    componentDidUpdate = () => {
        console.log("Component updated!")
    }

    render () {

        const {title, email, password, name, showHeading} =this.state

        return <>
            { showHeading && <h1> {title} </h1>}
            <button onClick={this.showHeadingHandler} > Show/Hide heading </button>
            <form onSubmit={this.submitHandler} >
                Email:-<input value={email} onChange={this.emailHandler} name="email" />
                Name:-<input value={name} onChange={this.nameHandler} name='name' />
                Password:-<input value={password} onChange={this.passwordHandler} name='password' />

                <button type='submit'> Submit </button>
                
            </form>

            {/* <Counter/> */}
        </>
    }

}

export default Auth


class Counter extends React.Component {

    state = {
        counter: 0
    }

    incrementHandler = () => {
        this.setState( prevState => ({ counter: prevState.counter + 4 }) )
        this.setState( prevState => ({ counter: prevState.counter + 6 }) )

    }

    decrementHandler = () => {
        this.setState( prevState => ({ counter: prevState.counter - 1 }) )
    }

    render () {

        return  <>
            <h2> Counter </h2>

            <button onClick={this.incrementHandler} > Increment </button> <span> {this.state.counter} </span>
            <button onClick={this.decrementHandler} > Decrement </button>
        </>


    }

}