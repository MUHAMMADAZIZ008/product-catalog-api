import { z } from "zod";


export const cartSchema = z.object({
    id: z.string().uuid("Invalid UUID format for 'id'"), // id UUID formatida bo'lishi kerak
    customer_id: z.string().uuid("Invalid UUID format for 'customer_id'").nullable(), // Nullable UUID
    product_id: z.string().uuid("Invalid UUID format for 'product_id'").nullable(), // Nullable UUID
    quantity: z.number()
      .int("Quantity must be an integer") // Butun son
      .positive("Quantity must be greater than zero"), // Musbat son
    added_at: z.string()
      .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date format for 'added_at'" }) // To'g'ri sana formati
  });