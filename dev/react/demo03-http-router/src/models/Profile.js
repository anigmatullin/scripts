class Profile
{
    constructor(user, mail)
    {
        this.user = user;
        this.mail = mail;
    }

    setMail(mail)
    {
        this.mail = mail;
    }

    setUser(user)
    {
        this.user = user;
    }
}

export {Profile};
