const db = require('../models')

const index = (req, res) => {
    db.themeAct.findAll()
        .then((themeActs) => {
            if(!themeActs) return res.json({
                message: 'No themes found in database.'
            })
            res.status(200).json({ themeActs: themeActs })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
}

const show = (req, res) => {
    db.themeAct.findByPk(req.params.id)
        .then((themeAct) => {
            if (!themeAct) return res.json({
                message: 'Theme with provided ID not found.'
            })
                
            res.status(200).json({ themeAct: themeAct })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
}

module.exports = {
    index,
    show
}