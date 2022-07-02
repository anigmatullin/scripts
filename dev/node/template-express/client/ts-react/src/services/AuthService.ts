
async function login(user: string, pass:string)
{
    console.log(user, pass);
    //send user/pass
    //get reply
    //if success - set user, token to Redux store
    //else donothing/retuen false
}

async function logout()
{
    //send logout call to API
    //clear user, token in Redux store
}

const AuthService = {
    login,
    logout,
}

export default AuthService;
