export const checkValidatons = (validatoin) => {
    return (req, res, next) =>{
        try {
            const body = req.body
            validatoin.parse(body)
            next()
        } catch (error) {
            next(error.message)
        }
    }
}