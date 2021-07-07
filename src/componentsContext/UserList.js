import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

export const UserList = () => {

    const { users ,deleteUser,editRow} = useContext(UserContext)

 
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>lastname</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.nickname}</td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => editRow(user)}
                                    >Edit</button>
                                    <button className="btn btn-danger"
                                        onClick={() => deleteUser(user.id)}
                                    >Delete</button>
                                </td>

                            </tr>
                        )
                    })

                }

            </tbody>
        </table>

    )
}
