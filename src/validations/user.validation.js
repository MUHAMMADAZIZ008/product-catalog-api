import z from 'zod'

export const userSchema = z.object({
    email: z.string()
        .email('this is not email')
        .nonempty('email is required'),
    username: z.string()
        .nonempty('username is required'),
    password: z.string()
        .nonempty('passowrd is required')
})

