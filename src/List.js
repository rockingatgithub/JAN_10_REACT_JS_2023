import React, { useState } from "react"

const Courses = [{id:1 , name: 'C++'}, {id:2 , name: 'Java'}, {id:3 , name: 'ReactJS'}, {id:4 , name: 'Python'}]

const List = props => {

    const [courses, setCourses] = useState(Courses)
    const [newCourse, setNewCourse] = useState('')
    const [isListVisible, setIsListVisible] = useState(true)

    const addCourse = () => {
        setCourses( prev =>  [ ...prev, newCourse ] )
        setNewCourse('')
    }

    const deleteItem = id => {
        const filteredList = props.courses.filter( item => item.id !== id )
        setCourses(filteredList) 
        // modify the props
        // props.courses = filteredList

        props.deleteItem()
    }

    return <>
        <h1>{props.heading}</h1>
        <input value={newCourse}  onChange={event => setNewCourse(event.target.value)} />
        <button onClick={addCourse} > Add Course </button>
        {isListVisible && <ul>

            {props.courses.map( course => <li> 
                {course.name}
                <button onClick={() => deleteItem(course.id)} > Delete </button>
            </li> )}


        </ul>}
    </>
}

export default List