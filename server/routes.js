const router = require('express').Router();

const userController = require('./controllers/userController');
const questionController = require('./controllers/questionController');

const jobsController = require('./controllers/jobsController');

router.use('/api/auth', userController);
router.use('/questionnaire', questionController);
router.use('/jobs', jobsController);

module.exports = router;