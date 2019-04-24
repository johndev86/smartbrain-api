const handleProfileGet = (req, res, db) => {
    const {id} = req.body;
    
    db.select('*').from('users').where({id: id})
    .then(user => {
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(400).json('not found');
        }
    });
}

const handleProfileUpdate = (req, res, db) => {
    const {name, age, pet, id} = req.body;

    db('users').where({id}).update({name,age,pet})
    .then(resp => {
        if (resp) {
            res.json('success');
        } else {
            res.status(400).json('unable to update');
        }
    })
    .catch(err => res.status(400).json('some error'));

}

module.exports = {
    handleProfileGet: handleProfileGet,
    handleProfileUpdate: handleProfileUpdate
};