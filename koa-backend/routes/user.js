import koaRouter from 'koa-router';
const router = new koaRouter(({ prefix: '/user' }));

import {createUser , loginUser } from '../middleware/auth'

router.post('/create', createUser)
router.post('/login' , loginUser )

module.exports = router
