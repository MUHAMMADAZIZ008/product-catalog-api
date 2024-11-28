import { z } from 'zod'

export const validateCategory = (category) => {
    const schema = z.object({
        name: z
            .string()
            .max(255, '"name" 255 belgidan oshmasligi kerak')
            .nonempty('"name" majburiy maydon'),
        description: z
            .string()
            .optional()
            .refine((val) => typeof val === 'string', {
                message: '"description" matn bo\'lishi kerak',
            }),
        tag: z
            .string()
            .max(255, '"tag" 255 belgidan oshmasligi kerak')
            .optional(),
    })

    try {
        schema.parse(category)
        return { success: true, errors: null }
    } catch (error) {
        return { success: false, errors: error.errors }
    }
}
