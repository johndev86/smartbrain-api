const handleSignin = (req, res, db, bcrypt) => {
    const {email, password} = req.body;
    db.select('email', 'hash').from('login').where('email','=',email)
    .then(login=>{
        if (login.length && bcrypt.compareSync(password,login[0].hash)) {
            return db.select('*').from('users').where('email','=',email)
            .then(user => {
                res.json(user[0]);
            })
            .catch(err => res.status(400).json('error signing in'));
        } else {
            res.status(400).json('invalid credentials');
        }
    })
    .catch(err => res.status(400).json('invalid credentials'));
}

module.exports = {
    handleSignin: handleSignin
}