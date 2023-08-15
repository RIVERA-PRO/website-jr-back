import express from 'express'
import passport from '../middlewares/passport.js'
import commentController from '../controllers/comments/create.js'
import validator from '../middlewares/validator.js'
import schema from '../schemas/comments.js'
import all_from_chapters from '../controllers/comments/all_from_chapter.js'
import update_Controller from '../controllers/comments/update.js'
import destroys from '../controllers/comments/destroy.js'
import is_propery_of_ from '../middlewares/comments/is_property_of.js'
const router = express.Router();

const { create } = commentController
const { all_from_chapter } = all_from_chapters
const { update } = update_Controller
const { destroy } = destroys

router.post('/', passport.authenticate('jwt', { session: false }), validator(schema), create);

router.get('/', all_from_chapter);

router.put("/:id", passport.authenticate("jwt", { session: false }), validator(schema), is_propery_of_, update);

router.delete('/:id', passport.authenticate('jwt', { session: false }), is_propery_of_, destroy);

export default router;