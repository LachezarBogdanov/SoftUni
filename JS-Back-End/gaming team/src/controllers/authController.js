import { Router } from "express";
import authService from "../services/authService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/register', (req, res) => {
    if(req.user) {
        res.redirect('/404');
    }

    res.render('auth/register', { title: 'Register Page - Gaming Team' });
});

authController.post('/register', async (req, res) => {
    if(req.user) {
        res.redirect('/404');
    }
    
    const { username, email, password, rePassword } = req.body;

    try{
        const token = await authService.register(username, email, password, rePassword);

        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });

        res.redirect('/');
    } catch(err) {
        const error = getErrorMessage(err);
        
        res.render('auth/register', { title: 'Register Page - Gaming Team', username, email, error });
    }
});

authController.get('/login', (req, res) => {
    if(req.user) {
        res.redirect('/404');
    }
    
    res.render('auth/login', { title: 'Login Page - Gaming Team' });
});

authController.post('/login', async (req, res) => {
    if(req.user) {
        res.redirect('/404');
    }
    
    const {email, password} = req.body;

    try{
        const token = await authService.login(email, password);

        res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });

        res.redirect('/');

    } catch(err) {
        const error = getErrorMessage(err);

        res.render('auth/login', { title: 'Login Page - Gaming Team', email, error });
    }
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);

    res.redirect('/');
})

export default authController;