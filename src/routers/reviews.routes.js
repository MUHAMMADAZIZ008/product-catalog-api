import { Router } from 'express'
import {
    createReviewController,
    deleteReviewController,
    getAllReviewController,
    getOneReviewController,
    updateReviewController,
} from '../controllers/reviews.controller.js'
import { checkValidatons, authGuard, roleGuard } from '../middlewares/index.js'
import { reviewSchema } from '../validations/index.js'

export const reviewRouter = Router()

reviewRouter.get('/', getAllReviewController)
reviewRouter.get('/:id', getOneReviewController)
reviewRouter.post(
    '/',
    authGuard,
    roleGuard(['user', 'admin', 'manager']),
    checkValidatons(reviewSchema),
    createReviewController,
)
reviewRouter.put(
    '/:id',
    authGuard,
    roleGuard(['admin', 'manager']),
    updateReviewController,
)
reviewRouter.delete(
    '/:id',
    authGuard,
    roleGuard(['admin', 'manager']),
    deleteReviewController,
)
