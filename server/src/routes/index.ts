import { Router } from 'express'

import * as controllers from '../controllers'

const router = Router()

router.get('/harry-potter', controllers.getHarryPotterCharacters)

router.get('/rick-and-morty', controllers.getRickAndMortyCharacters)

export default router
