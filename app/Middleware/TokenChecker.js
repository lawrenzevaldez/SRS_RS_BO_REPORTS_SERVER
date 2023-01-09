'use strict'
const jwt = require('jsonwebtoken')
const Env = use('Env')
const JWT_KEY = Env.get('JWT_KEY', 'secret')
const CustomException = use('App/Exceptions/CustomException')
const Redis = use('Redis')

class TokenChecker {
    async handle({request}, next) {
        let header = request.header('Authorization')
        let bearer = header.split(' ')

        if(bearer[1] != ' null') {
            let token = bearer[1]
            let data = await this.checkToken(token)
            let user_session = await Redis.get(data.user_id)
            let user_id = data.user_id
            request.user_id = user_id
            if(user_session != user_id) {
                await Redis.set(user_id, user_id)
            }
            await next()
        } else {
            throw new CustomException({ message: "Session expired. Please logout and login again." })
        }
    }

    async checkToken(token) {
        try {
            return jwt.verify(token, JWT_KEY)
        } catch(e) {
            throw new CustomException({ message: "Session expired. Please logout and login again." })
        }
    }
}

module.exports = TokenChecker