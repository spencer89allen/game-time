module.exports = {
    postScore: (req, res) => {
        const { score, username } = req.body
        const date = new Date();
        const dbInstance = req.app.get('db')

        dbInstance.add_score([
            date,
            score,
            username,
        ]).then((response) => {
            console.log(response)
            res.status(200).send('A new game and score has been added');
        }).catch((err) => {
            res.send(err)
            console.log(err)
        })
    }
}