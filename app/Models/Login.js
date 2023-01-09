'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Db = use('Database')

class Login extends Model {

    async auth(username, password) {
        let row = await Db.connection('mysql_217')
                          .select('user_name', 'first_name', 'last_name', 'emp_number')
                          .from('hs_hr_users')
                          .where('user_name', username)
                          .andWhere('user_password', password)
        await Db.close()
        return (row.length == 0) ? '' : row[0]
    }

}

module.exports = new Login
