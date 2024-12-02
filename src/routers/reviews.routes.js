import { Router } from 'express'
import {
    createReviewController,
    deleteReviewController,
    getAllReviewController,
    getOneReviewController,
    updateReviewController,
} from '../controllers/reviews.controller.js'
import {checkValidatons} from "../middlewares/index.js"
import { reviewSchema } from '../validations/index.js'

export const reviewRouter = Router()

reviewRouter.get('/', getAllReviewController)
reviewRouter.get('/:id', getOneReviewController)
reviewRouter.post('/',  checkValidatons(reviewSchema), createReviewController)
reviewRouter.put('/:id', updateReviewController)
reviewRouter.delete('/:id', deleteReviewController)
