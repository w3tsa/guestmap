import express from 'express';
import Joi from 'joi';

import db from '../db.js';
const messages = db.get('messages')

const schema = Joi.object().keys({
    name: Joi.string().min(1).max(500).required(),
    message: Joi.string().min(1).max(500).required(),
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required()
  });


const router = express.Router();

router.get('/', (req, res) => {
    messages
    .find()
    .then(allMessages => {
        res.json(allMessages)
    })
})
router.post('/', (req, res, next) => {
    const {error, value} = schema.validate(req.body);
    if(!error) {
        const { name, message, latitude, longitude } = value; 
        const userMessage = {
            name, message, latitude, longitude
        }
        messages.insert(userMessage).then(insertedMessage => {
            res.json(insertedMessage)
        })
    } else {
        next(error)
    }    
})

export default router;