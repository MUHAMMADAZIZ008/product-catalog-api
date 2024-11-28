import { Router } from 'express'
import {
    createReviewController,
    deleteReviewController,
    getAllReviewController,
    getOneReviewController,
    updateReviewController,
} from '../controllers/reviews.controller.js'

export const reviewRouter = Router()

reviewRouter.get('/', getAllReviewController)
reviewRouter.get('/:id', getOneReviewController)
reviewRouter.post('/', createReviewController)
reviewRouter.put('/:id', updateReviewController)
reviewRouter.delete('/:id', deleteReviewController)
