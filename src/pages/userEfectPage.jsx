import { React, useState, useEffect } from 'react';

export const UserEfectPage = () => {

    const [userName, setUserName] = useState('Change Names') ;
    const [userPws, setUserPassword] = useState('') ; 
    
    useEffect(() =>{
        console.log(userName);
    }, [userName, userPws])

    return (
        <>
            <h1>Pagina do UserEfect - User : {userName} - Senha: {userPws}</h1>
            <input
                type='text'
                value={userName}
                name='User'
                onChange={(event) => { setUserName(event.target.value) }}
            />

            <input
                type='password'
                value={userPws}
                name='Senha'
                onChange={(event) => { setUserPassword(event.target.value) }}
            />            
        </>
    )
}

export default UserEfectPage;