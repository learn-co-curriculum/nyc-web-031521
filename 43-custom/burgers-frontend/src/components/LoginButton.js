function LoginButton({helpSetUser}){

    let handleClick = () => {
        fetch('http://localhost:3000/users/1')
            .then(res => res.json())
            .then(user => {
                helpSetUser(user)
            })
    }
    
    return (
        <button onClick={handleClick} className="submit">
            Log In
        </button>
    )
}

export default LoginButton