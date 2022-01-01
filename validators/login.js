const { Joi, celebrate } = require('celebrate')

const login = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
})


module.exports = {
    login: celebrate({ body: login })
}
