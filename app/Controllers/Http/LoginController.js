'use strict'
const Env = use('Env')
const JWT_KEY = Env.get('JWT_KEY', 'secret')
const jwt = require('jsonwebtoken')
const LoginMod = use('App/Models/Login')
const md5 = require('md5')
const CustomException = use('App/Exceptions/CustomException')
const Redis = use('Redis')

class LoginController {

    async auth({request, response}) {
        let { username, password } = request.only(['username', 'password'])
        let user = await LoginMod.auth(username, md5(password))

        let user_id, fullname
        console.log(user)

        if(user == '') {
            throw new CustomException({ message: "Username or Password is incorrect. Please try again." })
        } else {
            user_id = user.emp_number
            fullname = user.first_name + ' ' + user.last_name
        }

        const token = jwt.sign({
            user_id: user_id
        },  JWT_KEY, {
            expiresIn: "12h"
        })

        return response.status(200).send({ token, user_id, fullname })
    }

    async logout({request, response}) {
        let user_id = request.only(['user_id'])
        await Redis.del(user_id)
        response.status(200).send()
    }

}

module.exports = LoginController
