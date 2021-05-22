import express from 'express';
import messages from './messages.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋'
    })
})

router.use('/messages', messages);

export default router;