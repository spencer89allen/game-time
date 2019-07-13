module.exports = {

    addProfile: (req, res) => {
        const { username, userInfo, image } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.add_profile([
            username,
            userInfo,
            image,
        ]).then((response) => {
            console.log(response)
            res.status(200).send('A new profile has been added');
        }).catch((err) => {
            res.send(err)
            console.log(err)
        })
    },

    getProfile: (req, res) => {
        const { username } = req.body
        const dbInstance = req.app.get('db')

        // console.log(req.body)

        dbInstance.get_user_info([username]).then(profile => {
            res.status(200).send(profile)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something went wrong getting the proflie info from the database')
        })
    },

    getGameHistory: (req, res) => {
        const { username } = req.body
        const dbInstance = req.app.get('db')


        dbInstance.get_game_history([username]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something went wrong getting the proflie info from the database')
        })
    },
    
}