const handleProfile = (req, res, db) => {
    const {id} = req.params;
    
    db.select('*').from('users').where({id: id})
    .then(user => {
        if (user.length) {
            res.json(user[0]);
        } else {
            console.log(process.env.DATABASE_URL)
            res.status(400).json('not found');
        }
    });
}

module.exports = {
    handleProfile: handleProfile
};