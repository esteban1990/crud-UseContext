import React, {useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import UserContext from '../context/User/UserContext'

export const AddUserForm = () => {


    const {setUsers} = useContext(UserContext)

    const [newUser,setNewUser] = useState({
        id:uuidv4(),
        name:'',
        lastname:'',
        nickname:''
    })


    const handleChangeName = (e) => {
        setNewUser({
            ...newUser,
            name:e.target.value,
        })
    }
    const handleChangeLastname = (e) => {
        setNewUser({
            ...newUser,
            lastname:e.target.value,
        })
    }
    const handleChangeNickname = (e) => {
        setNewUser({
            ...newUser,
            nickname:e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const addUser = {
            id:uuidv4(),
            name:newUser.name,
            lastname:newUser.lastname,
            nickname:newUser.nickname
        }

        setUsers(users => [addUser,...users])
        setNewUser({
            ...newUser,
            name:'',
            lastname:'',
            nickname:''
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    value={newUser.name}
                    name='name'
                    onChange={handleChangeName}
                    placeholder="ingresa nombre"
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    value={newUser.lastname}
                    name="lastname"
                    onChange={handleChangeLastname}
                    placeholder="ingresa apelllido"
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    value={newUser.nickname}
                    name='nickname'
                    onChange={handleChangeNickname}
                    placeholder="ingresa tu sobre nombre"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
            
        </div>
    )
}
