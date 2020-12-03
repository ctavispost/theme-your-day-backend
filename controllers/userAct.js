const db = require('../models')

const index = (req, res) => {
    db.userAct.findAll()
        .then((founduserActs) => {
            console.log('hello', founduserActs);

            if(!founduserActs) return res.json({
                message: 'No userActs found in database.'
            })
            res.status(200).json({ userActs: founduserActs })
        })
        .catch(error => res.status(500).send(error));
}

const show = (req, res) => {
    db.userAct.findByPk(req.params.id)
        .then((founduserAct) => {
            if (!founduserAct) return res.json({
                message: 'userAct with provided ID not found.'
            })
                
            res.status(200).json({ userAct: founduserAct })
        })
        .catch(error => res.status(500).send(error));
}

module.exports = {
    index,
    show
}