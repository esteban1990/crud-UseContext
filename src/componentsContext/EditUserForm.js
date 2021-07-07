import React, { useState, useContext } from 'react'
import UserContext from '../context/User/UserContext'

export const EditUserForm = () => {

    const { currentUser,setEditing ,updateUsers} = useContext(UserContext)

    const [user, setUser] = useState(currentUser)
    console.log(user)

    const handleChangeName = (e) => {
        setUser({
            ...user,
            name: e.target.value
        })
    }

    const handleChangeLastname = (e) => {
        setUser({
            ...user,
            lastname: e.target.value
        })
    }
    const handleChangeNickname = (e) => {
        setUser({
            ...user,
            nickname: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUsers(user.id,user)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type='text'
                        // name='name'
                        value={user.name}
                        onChange={handleChangeName}
                        placeholder="Ingresa un nombre"

                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        // name="lastname"
                        value={user.lastname}
                        onChange={handleChangeLastname}
                        placeholder="ingresa un username"

                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        // name="nickname"
                        value={user.nickname}
                        onChange={handleChangeNickname}
                        placeholder="ingresa un nickname"

                    />
                </div>
                <button className="btn btn-primary">Edit User</button>
                <button onClick={() => setEditing(false)} className="btn btn-primary">Cancel</button>
            </form>
        </div>
    )
}
// export default EditUserForm