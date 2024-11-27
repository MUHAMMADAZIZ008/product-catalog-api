import { db } from '../database/index.js'

export const getallCategoryController = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const categories = await db('categories')
            .select('*')
            .limit(limit)
            .offset(skip)

        if (categories.length === 0) {
            return res
                .status(404)
                .send({ status: 'Not Found', message: 'No category found' })

            return res
                .status(200)
                .send({ Status: 'Success', page, limit, categories })
        }
    } catch (error) {
        next(error)
    }
}

export const getoneCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const category = await db('categories')
            .select('*')
            .limit(limit)
            .offset(skip)

        if (!category) {
            return res
                .status(404)
                .send({ status: 'Not Found', message: 'No category found' })

            return res.status(200).send({ Status: 'Success', category })
        }
    } catch (error) {
        next(error)
    }
}

export const createCategoryController = async (req, res, next) => {
    try {
        const newCategory = await db('categories')
            .insert(req.body)
            .returning('*')

        return res.status(201).send({
            status: 'Created',
            category: newCategory[0],
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const updates = req.body

        const updated = await db('categories')
            .where({ id })
            .update(updates)
            .returning('*')

        if (updated.length === 0) {
            return res
                .status(404)
                .send({ status: 'Not Found', message: 'No Category found' })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id

        const deleted = await db('categories').where({ id }).del()

        if (!deleted) {
            return res.status(404).send({
                status: 'Not Found',
                message: 'No category found',
            })
        }
        return res.status(200).send({
            status: 'Deleted',

            message: 'Category deleted Successfully',
        })
    } catch (error) {
        next(error)
    }
}
