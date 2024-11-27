import z from 'zod'

export const cartSchema = z.object({
    customer_id: z.string().nonempty('customer id is required'),
    product_id: z.string().nonempty('product id is required'),
    quantity: z.string().nonempty('quantity is required'),
})
