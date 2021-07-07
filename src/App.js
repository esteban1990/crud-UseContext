import React,{useContext} from 'react'
import { UserState } from './context/User/UserState'

import HomeForms from './componentsContext/HomeForms'

export const AppContext = () => {

    return (
        <>
            <UserState>
               <HomeForms />
            </UserState>
        </>
    )
}
export default AppContext