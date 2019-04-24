const handleRegister = (req, res, db, bcrypt) => {
    const {email, name, password} = req.body;
    const hash = bcrypt.hashSync(password);

    db.transaction(trx => {
        return trx
            .insert({
                hash: hash,
                email: email
            })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({email: loginEmail[0],name: name, joined: new Date()})
                    .then(user => {
                        res.json(user[0]);
                    })
            });
    })
    .catch(err => console.log(err));
}

module.exports = {
    handleRegister: handleRegister
};