import { validateCategory } from "../validations/index.js";

export const createCategory = (req, res, next) => {
    const { success, errors } = validateCategory(req.body);  // validateCategory funksiyasini chaqirish

    if (!success) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors.map((err) => err.message),  // zod xatoliklaridan foydalanish
        });
    }

    next();  // Agar xatolik bo'lmasa, keyingi middlewarega o'tish
};
