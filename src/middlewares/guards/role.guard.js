export const roleGuard = (allowedRoles) => {
    return (req, res, next) => {
        try {
            const { role, sub } = req.user
            if (!allowedRoles.includes(role) || sub !== req.params.id) {
                throw new ForbiddenError('access deny!')
            }
            next()
        } catch (e) {
            logger.error(e)
            next(e)
        }
    }
}
