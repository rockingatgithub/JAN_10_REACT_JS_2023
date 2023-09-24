import React, { useState } from "react"

const Courses = ['C++', 'Java', 'Python', 'ReactJS']

const List = () => {

    const [courses, setCourses] = useState(Courses)
    const [newCourse, setNewCourse] = useState('')

    const addCourse = () => {
        setCourses( [ ...courses, newCourse ] )
        setNewCourse('')
    }

    return <>
        <h1>List of courses</h1>
        <input value={newCourse}  onChange={event => setNewCourse(event.target.value)} />
        <button onClick={addCourse} > Add Course </button>
        <ul>

            {courses.map( course => <li> {course} </li> )}


        </ul>
    </>
}

export default List