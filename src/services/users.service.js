import { AppError, logger, otpGenerator, sendMail } from '../utils/index.js'
import { db } from '../database/index.js'

export const getUserService = async (type, data) => {
    try {
        let result
        switch (type) {
            case 'all':
                result = await db.select().from('users')
                break
            case 'id':
                result = await db.select().from('users').where('id', '=', data)
                break
            case 'email':
                result = await db
                    .select()
                    .from('users')
                    .where('email', '=', data)
                break
            case 'username':
                result = await db
                    .select()
                    .from('users')
                    .where('username', '=', data)
                break
            default:
                break
        }
        return result
    } catch (error) {
        logger.error(error.message)
        throw new AppError(error.message, 500)
    }
}

export const createUserService = async (user) => {
    try {
        const currentEmail = await getUserService('email', user.email)
        if (currentEmail.length !== 0) {
            throw new AppError('email already exists', 403)
        }

        const currentUsername = await getUserService('username', user.username)
        if (currentUsername.length !== 0) {
            throw new AppError('username already exists', 403)
        }
        const newUser = await db('users').insert(user).returning('*')
        return newUser
    } catch (error) {
        logger.error(error.message)
        throw new AppError(error, 500)
    }
}

export const updateUserService = async (id, updateUser) => {
    try {
        const currentEmail = await getUserService('email', updateUser.email)
        if (currentEmail.length !== 0) {
            throw new AppError('email already exists', 403)
        }

        const currentUsername = await getUserService(
            'username',
            updateUser.username,
        )
        if (currentUsername.length !== 0) {
            throw new AppError('username already exists', 403)
        }
        const updatedUser = await db('users')
            .where('id', '=', id)
            .update(updateUser)
            .returning('*')
        if (updatedUser.length === 0) {
            throw new AppError('user not found', 404)
        }
        return updatedUser
    } catch (error) {
        logger.error(error.message)
        throw new AppError(error.message, 500)
    }
}

export const daleteUserService = async (id) => {
    try {
        const deleteUser = await db('users')
            .where('id', '=', id)
            .del()
            .returning('*')
        if (deleteUser.length === 0) {
            throw new AppError('user not found', 404)
        }

        return deleteUser
    } catch (error) {
        logger.error(error.message)
        throw new AppError(error.message, 500)
    }
}

//auth
export const authService = async (user) => {
    try {
        const newUser = await createUserService(user)
        console.log(newUser)

        const otp = otpGenerator
        await sendMail(newUser[0].email, 'YOUR OTP', otp)
        return newUser
    } catch (error) {
        throw new AppError(error.message, 500)
    }
}
