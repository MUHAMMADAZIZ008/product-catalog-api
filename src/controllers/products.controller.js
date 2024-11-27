import { db } from '../database/index.js'

export const getallProductController = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const products = await db('products')
            .select('*')
            .limit(limit)
            .offset(skip)

        if (products.length === 0) {
            return res
                .status(404)
                .send({ status: 'Not Found', message: 'No products found' })

            return res
                .status(200)
                .send({ Status: 'Success', page, limit, products })
        }
    } catch (error) {
        next(error)
    }
}

export const getoneProductController = async (req, res, next) => {
    try {
        const id = req.params.id
        const category = await db('products')
            .select('*')
            .limit(limit)
            .offset(skip)

        if (!product) {
            return res
                .status(404)
                .send({ status: 'Not Found', message: 'No product found' })

            return res.status(200).send({ Status: 'Success', product })
        }
    } catch (error) {
        next(error)
    }
}

export const createProductController = async (req, res, next) => {
    try {
        const newProducts = await db('products').insert(req.body).returning('*')

        return res.status(201).send({
            status: 'Created',
            product: newProducts[0],
        })
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateProductController = async (req, res, next) => {
    try {
        const id = req.params.id
        const updates = req.body

        const updated = await db('products')
            .where({ id })
            .update(updates)
            .returning('*')

        if (updated.length === 0) {
            return res
                .status(404)
                .send({ status: 'Not Found', message: 'No Product found' })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteProductController = async (req, res, next) => {
    try {
        const id = req.params.id

        const deleted = await db('products').where({ id }).del()

        if (!deleted) {
            return res.status(404).send({
                status: 'Not Found',
                message: 'No product found',
            })
        }
        return res.status(200).send({
            status: 'Deleted',

            message: 'Product deleted Successfully',
        })
    } catch (error) {
        next(error)
    }
}
