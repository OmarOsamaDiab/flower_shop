const { Joi, celebrate } = require('celebrate')

const register = Joi.object().keys({
    username: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().min(5).required(),
    email: Joi.string().email().required()
})


module.exports = {
    register: celebrate({ body: register })
}
