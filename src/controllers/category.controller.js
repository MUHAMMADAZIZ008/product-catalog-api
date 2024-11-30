import { db } from '../database/index.js'
import {
    createCategoryService,
    deleteCategoryService,
    getCategorySevice,
    updateCategoryService,
} from '../services/index.js'

export const getallCategoryController = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const categories = await db('categories')
            .select('*')
            .limit(limit)
            .offset(skip)

        const allCategory = await getCategorySevice('all')
        return res.status(200).send({
            message: 'success',
            date: allCategory,
        })
    } catch (error) {
        next(error)
    }
}

export const getoneCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const category = await getCategorySevice('id', id)

        return res.status(200).send({
            message: 'success',
            date: category,
        })
    } catch (error) {
        next(error)
    }
}

export const createCategoryController = async (req, res, next) => {
    try {
        const body = req.body
        const newCategory = await createCategoryService(req.body)

        return res.status(201).send({
            status: 'Created',
            category: newCategory.id,
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

        const updatedCategory = await updateCategoryService(id, updates)

        if (!updatedCategory) {
            return res.status(404).send({
                status: 'Not Found',
                message: 'No Category found with the provided ID',
            })
        }

        return res.status(200).send({
            status: 'Success',
            category: updatedCategory,
        })
    } catch (error) {
        next(error)
    }
}

export const deleteCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedCategory = await deleteCategoryService(id)

        return res.status(200).send({
            status: 'Deleted',

            message: 'Category deleted Successfully',
        })
    } catch (error) {
        next(error)
    }
}
