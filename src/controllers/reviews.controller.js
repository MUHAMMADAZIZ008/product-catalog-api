import {db} from '../database/index.js'

export const getAllReviewController = async (req,res,next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const reviews = await db('reviews')
            .select('*')
            .limit(limit)
            .offset(skip)

        if (reviews.length === 0){
            return res.status(404).send({
                status:"Not Found",
                message: "No Review found",
            })
        }

        return res.status(200).send({
            status:"Success",
            page,
            limit,
            reviews,
        })
    } catch (error) {
        next(error)
        
    }
}

export const getOneReviewController = async (req,res,next) => {
    try {
        const id = req.params.id
        const reviews = await db('reviews')
            .select('*')
            .where({id})
            .first()

        if (reviews.length === 0){
            return res.status(404).send({
                status:"Not Found",
                message: "No Review found",
            })
        }

        return res.status(200).send({
            status:"Success",
            reviews,
        })
    } catch (error) {
        next(error)
        
    }
}

export const createReviewController = async (req,res,next) => {
    try {
        const newReviews = await db('reviews')
            .insert(req.body)
            .returning("*")
        
        return res.status(201).send({
            status:"Created",
            review:newReviews[0]
        })

    } catch (error) {
        next(error)
        
    }
}

export const updateReviewController = async (req,res,next) => {
    try {
        const id = req.params.id
        const updates = req.body

        const updated = await db('reviews')
            .where({id})
            .update(updates)
            .returning('*')

        if (updated.length === 0){
            return res.status(404).send({
                status:"Not Found",
                message: "No Review found",
            })
        }

        return res.status(200).send({
            status:"Success",
            reviews: updated[0],
        })
    } catch (error) {
        next(error)
        
    }
}


export const deleteReviewController = async (req,res,next) => {
    try {
        const id = req.params.id

        const deleted = await db('reviews')
            .where({id})
            .del()

        if (!deleted){
            return res.status(404).send({
                status:"Not Found",
                message: "No Review found",
            })
        }

        return res.status(200).send({
            status:"Deleted",
            message:"Review deleted successfully",
        })
    } catch (error) {
        next(error)
        
    }
}