const db = require('../models')

const index = (req, res) => {
    db.theme.findAll()
        .then((foundThemes) => {
            if(!foundThemes) return res.json({
                message: 'No themes found in database.'
            })
            res.status(200).json({ themes: foundThemes })
        })
        .catch(error => res.status(500).send(error));
}

const show = (req, res) => {
    db.theme.findByPk(req.params.id)
        .then((foundTheme) => {
            if (!foundTheme) return res.json({
                message: 'Theme with provided ID not found.'
            })
                
            res.status(200).json({ Theme: foundTheme })
        })
        .catch(error => res.status(500).send(error));
}

module.exports = {
    index,
    show
}