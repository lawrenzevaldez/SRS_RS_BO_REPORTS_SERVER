'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
    Route.post('/auth', 'LoginController.auth')
    Route.get('/logout', 'LoginController.logout')

    Route.get('/get_branches', 'RsBoController.getBranches')
    Route.get('/get_branch_details', 'RsBoController.getBranchDetails')
    Route.get('/get_branch_details_date', 'RsBoController.getBranchDetailsByDate')
    Route.get('/get_movement_details', 'RsBoController.getMovementDetails')
    Route.post('/export_movement_details', 'RsBoController.exportMovementDetails')
}).prefix('api')