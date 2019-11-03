const express = require('express');
const rateLimit = require('./rateLimiter')
const app = express();
const router = express.Router();

const limiter = rateLimit({
    windowMs: 6 * 10 * 1000, // throttling time
    max: 10, //max request per throttling time
    keyGenerator: function (req, res) {
        return req.ip + req.params.id // unique key to identify to track request 
    }
})

app.use('/api/', router);

router.get('/:id', limiter, (req, res) => {
    res.send('Hi!')
})


app.listen(5000, () => {
    console.log('server is running on port 5000');
})

