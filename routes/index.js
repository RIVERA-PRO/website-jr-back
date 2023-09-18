import userRouter from './users.js'

import commentsRouter from './comments.js';
import consulta from './consultas.js'

import express from 'express'
let router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)

router.use("/comments", commentsRouter);
router.use('/consulta', consulta)

export default router