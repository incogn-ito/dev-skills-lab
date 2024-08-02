import { Router } from 'express'
import * as toysCtrl from '../controllers/toys.js'

const router = Router()

// GET localhost:3000/users
router.get('/', toysCtrl.index)
router.get('/new', toysCtrl.new)
router.post('/', toysCtrl.create)
router.delete('/:toyId', toysCtrl.delete)

export { router }

