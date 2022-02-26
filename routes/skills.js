import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET skills listing. */

// get localhost:3000/skills
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)

// get localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)

export {
  router
}
