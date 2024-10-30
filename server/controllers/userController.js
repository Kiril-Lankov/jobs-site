const router = require('express').Router();
const userService = require('../services/userService');
const companyService = require('../services/companyService');

router.post('/register/employee',async (req, res) => {
    const userData = req.body;
    
    try {
        const token = await userService.register({...userData, user_type: 'employee'});
        res.cookie('auth', token, { httpOnly: true });
        res.json(token);
    } catch (error) {
        console.log(error);
        
        res.status(409).json({ error: error.message });
    }
});

router.post('/login/employee',async (req, res) => {
    const userData = req.body;
    try {
        const token = await userService.login(userData);
        res.cookie('auth', token, { httpOnly: true });
        res.json(token);
    } catch (error) {
        res.status(204).json({ error: error.message });
    }
});

router.post('/register/company',async (req, res) => {
    const userData = req.body;
    try {
        const token = await companyService.register({...userData, user_type: 'company'});
        console.log(token)
        res.cookie('auth', token, { httpOnly: true });
        res.json(token);
    } catch (error) {
        
        res.status(409).json({ error: error.message });
    }
});

router.post('/login/company',async (req, res) => {
    const userData = req.body;
    try {
        const token = await companyService.login(userData);
        res.cookie('auth', token, { httpOnly: true });
        res.json(token);
    } catch (error) {
        res.status(204).json({ error: error.message });
    }
});

router.post('/logout',async (req, res) => {
    res.clearCookie('auth');
    res.json({ok: true});
});

router.get('/:userId/jobs', async (req, res, next) => {
    const userId = req.params.userId;
    const token = await companyService.getMyProfile(userId);
    res.json(token);
});


module.exports = router;