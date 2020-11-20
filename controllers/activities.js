const db = require('../models')

const create = (req, res) => {
    db.activity.create(req.body).then((savedGame) => {
        // Validations and error handling here
        res.status(200).json({ activity: savedActivity })
    })
}

const update = (req, res) => {
    db.activity.update({
        ...req.body
    }, {
    where: {
        id: req.params.id
    }
    }).then((updatedActivity) => {
        if (!updatedActivity) return res.json({
            message: "No activity with that ID found."
        })
        // Validations and error handling here
        res.status(200).json({ activity: updatedGame })
    })
}


const destroy = (req, res) => {
    db.activity.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.status(200)
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}