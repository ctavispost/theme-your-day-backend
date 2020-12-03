const db = require('../models')

const index = (req, res) => {
    db.activity.findAll()
        .then((foundActs) => {
            if(!foundActs) {
                return res.json({
                    message: 'No activities found in database.'
                });
            }
            res.status(200).json({ activity: foundActs });
        })
        .catch(error => res.status(500).send(error));
}

const create = async (req, res) => {
    
    const createdActivity = await db.activity.create(req.body);
    const relationInfo = await createdActivity.addUser(req.user);
    console.log(relationInfo);
    res.json(createdActivity);
}

const show = (req, res) => {
    db.activity.findByPk(req.params.id)
        .then((foundAct) => {
            if (!foundAct) return res.json({
                message: 'Act with provided ID not found.'
            })
                
            res.status(200).json({ activity: foundAct })
        })
        .catch(error => res.status(500).send(error));
}

const update = (req, res) => {
    db.activity.update({
        ...req.body
    }, {
    where: {
        id: req.params.id
    }
    })
        .then((updatedActivity) => {
            if (!updatedActivity) return res.json({
                message: "No activity with that ID found."
            })
        res.status(200).json({ activity: updatedGame })
        .catch(error => res.status(500).send(error));
    })
}


const destroy = (req, res) => {
    db.activity.destroy({
        where: { id: req.params.id }
    })
        .then(() => {
            res.status(200)
        })
        .catch(error => res.status(500).send(error));
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}