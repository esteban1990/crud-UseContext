import { EditUserForm } from "./EditUserForm";
import { AddUserForm } from "./AddUserForm";
import { UserList } from "./UserList";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";


const HomeForms = () => {

    
    const {editing} = useContext(UserContext)
    console.log(editing)    

    return (  

        <div className="container">
        <div className="row">
            <h1>Crud Context</h1>
            <div className="col-6">
                {
                    editing ? (
                        <div>
                            <h3>Edit User Form</h3>
                        <EditUserForm/>
                       </div>
                    ) : (
                        // <h1>Add Form User</h1>
                        <div>
                            <h3>Add User Form</h3>
                        <AddUserForm />
                        </div>
                    )
                }
            </div>
            <div className="col-6">
                <h1>List Users</h1>
                <UserList />
            </div>
        </div>
    </div>
    );
}
 
export default HomeForms;