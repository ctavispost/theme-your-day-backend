const db = require('../models')

const index = (req, res) => {
    db.theme.findAll().then((foundThemes) => {
        if(!foundThemes) return res.json({
            message: 'No themes found in database.'
        })

        res.status(200).json({ themes: foundThemes });
    })
}

const show = (req, res) => {
    console.log('in the show route')
    console.log(req.params)
    db.theme.findByPk(req.params.id).then((foundTheme) => {
        if (!foundTheme) return res.json({
            message: 'Theme with provided ID not found.'
        })
            
        res.status(200).json({ Theme: foundTheme })
    })
}

module.exports = {
    index
}