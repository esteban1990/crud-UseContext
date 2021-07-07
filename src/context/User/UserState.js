import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import UserContext from './UserContext'



const initialState = [
    { id: uuidv4(), name: 'esteban', lastname: 'bravo', nickname: 'patilla' },
    { id: uuidv4(), name: 'fabian', lastname: 'fuentes', nickname: 'negro' },
    { id: uuidv4(), name: 'fernada', lastname: 'bravo', nickname: 'chira' },
    { id: uuidv4(), name: 'amanda', lastname: 'fuentes', nickname: 'chiki' }
]

export const UserState = (props) => {

    const [users, setUsers] = useState(initialState)

    const [currentUser, setCurrentUser] = useState({
        id: null, name: '', lastname: '', nickname: ''
    })

    const [editing, setEditing] = useState(false)


    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            nickname: user.nickname
        })

    }

    const deleteUser = (id) => {
        const updateUsers = [...users].filter(user => {
            return (
                user.id !== id
            )
        })
        setUsers(updateUsers)
    }

    const updateUsers = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }



    return (
        <UserContext.Provider value={{
            users,
            setUsers,
            currentUser,
            deleteUser,
            editRow,
            editing,
            setEditing,
            updateUsers

        }}>

            {props.children}
        </UserContext.Provider>
    )
}
