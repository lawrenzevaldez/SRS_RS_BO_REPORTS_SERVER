'use strict'

const RsBoMod = use('App/Models/RsBo')
const CustomException = use('App/Exceptions/CustomException')
const leftPad = require('left-pad')
const moment = require('moment')
const Excel = require('exceljs')
const Helpers = use('Helpers')
const Drive = use('Drive')
const _ = require('lodash')
const Env = use('Env')

class RsBoController {

    async getBranches({request, response}) {
        let res = await RsBoMod.getBranches()

        if(!res) {
            throw new CustomException({ message: "UNABLE TO FETCH BRANCHES" }, 401)
        }

        let list_branches = []
        for(const row of res) {
            list_branches.push({
                branch_code: row.code,
                branch_name: row.name
            })
        }

        response.status(200).send({ list_branches })
    }

    async getBranchDetails({request, response}) {
        let { branch_code, p_page, p_search, p_currentSort, p_currentSortDir } = request.only(['branch_code', 'p_page', 'p_search', 'p_currentSort', 'p_currentSortDir'])

        let [ res, page_count ] = await RsBoMod.getBranchDetails(branch_code, p_page, p_search, p_currentSort, p_currentSortDir)
        
        if(!res) {
            throw new CustomException({ message: "UNABLE TO FETCH BRANCH RS & BO DETAILS" }, 401)
        }

        let list_rms = []
        for(const row of res) {
            list_rms.push({
                rs_id: row.rs_id,
                rs_date: row.rs_date,
                supplier_code: row.supplier_code,
                movement_type: row.movement_type,
                movement_no: row.movement_no,
                processed: row.processed
            })
        }

        response.status(200).send({ list_rms, page_count })
    }

    async getBranchDetailsByDate({request, response}) {
        let { branch_code, p_page, p_search, p_currentSort, p_currentSortDir, d_from, d_to } = request.only(['branch_code', 'p_page', 'p_search', 'p_currentSort', 'p_currentSortDir', 'd_from', 'd_to'])

        let [ res, page_count ] = await RsBoMod.getBranchDetailsByDate(branch_code, p_page, p_search, p_currentSort, p_currentSortDir, moment(d_from).format('YYYY-MM-DD'), moment(d_to).format('YYYY-MM-DD'))
        
        if(!res) {
            throw new CustomException({ message: "UNABLE TO FETCH BRANCH RS & BO DETAILS" }, 401)
        }

        let list_rms = []
        for(const row of res) {
            list_rms.push({
                rs_id: row.rs_id,
                rs_date: row.rs_date,
                supplier_code: row.supplier_code,
                movement_type: row.movement_type,
                movement_no: row.movement_no,
                processed: row.processed
            })
        }

        response.status(200).send({ list_rms, page_count })
    }

    async getMovementDetails({request, response}) {
        try {
            let { branch_code, movement_no, rs_id } = request.only(['branch_code', 'movement_no', 'rs_id'])

            let pickup_details = await RsBoMod.getPickupDetails(branch_code, rs_id)

            let fMovement_no = leftPad(movement_no, 10, 0)
            let movement_header = await RsBoMod.getMovementHeader(branch_code, fMovement_no)

            let movement_id = movement_header.MovementID
            let movement_details = await RsBoMod.getMovementDetails(branch_code, movement_id)

            let res = []

            res.push({
                pickup_details: pickup_details,
                movement_header: movement_header,
                movement_details: movement_details
            })

            response.status(200).send({ res })

        } catch(error) {
            throw new CustomException({ message: error}, 401)
        }
    }

    async exportMovementDetails({request, response}) {
        let { pickup_details, movement_header, movement_details, total_quantity, total_amount, rs_id, movement_no } = request.only(['pickup_details', 'movement_header', 'movement_details', 'total_quantity', 'total_amount', 'rs_id', 'movement_no'])
        
        const workbook = new Excel.Workbook()
        const worksheet = workbook.addWorksheet(`RS ID# ${rs_id}`)

        // SUPPLIER FORM DETAILS
        worksheet.getRow(1).getCell(1).value = `Movement No. ${movement_no} Details`
        worksheet.getRow(3).getCell(1).value = 'Supplier Details'
        worksheet.getRow(4).getCell(1).value = 'Supplier Name'
        worksheet.getRow(5).getCell(1).value = 'Supplier Code'
        worksheet.getRow(6).getCell(1).value = 'Supplier Address'
        worksheet.getRow(7).getCell(1).value = 'Contact Person'

        // SUPPLIER FORM DATA
        worksheet.getRow(4).getCell(2).value = movement_header.ToDescription
        worksheet.getRow(5).getCell(2).value = movement_header.VendorCode
        worksheet.getRow(6).getCell(2).value = movement_header.ToAddress
        worksheet.getRow(7).getCell(2).value = movement_header.ContactPerson

        // MOVEMENT FORM DETAILS
        worksheet.mergeCells('D2:E2')
        worksheet.getRow(3).getCell(4).value = 'Movement Details'
        worksheet.getRow(4).getCell(4).value = 'Movement Code'
        worksheet.getRow(5).getCell(4).value = 'Date Posted'

        // MOVEMENT FORM DATA 
        worksheet.getRow(4).getCell(5).value = movement_header.MovementCode
        worksheet.getRow(5).getCell(5).value = moment(movement_header.PostedDate).format('YYYY-MM-DD')

        // PICKUP FORM DETAILS
        worksheet.mergeCells('G2:H2')
        worksheet.getRow(3).getCell(7).value = 'Pickup Details'
        worksheet.getRow(4).getCell(7).value = 'Driver\'s Name'
        worksheet.getRow(5).getCell(7).value = 'Plate No.'

        // PICKUP FORM DATA
        worksheet.getRow(4).getCell(8).value = (pickup_details == null) ? '' : pickup_details.tname
        worksheet.getRow(5).getCell(8).value = (pickup_details == null) ? '' : pickup_details.tplate_no

        // MOVEMENT FORM DETAILS
        worksheet.getRow(9).getCell(1).value = 'PRODUCT ID'
        worksheet.getRow(9).getCell(2).value = 'BARCODE'
        worksheet.getRow(9).getCell(3).value = 'DESCRIPTION'
        worksheet.getRow(9).getCell(4).value = 'UOM'
        worksheet.getRow(9).getCell(5).value = 'UNIT COST'
        worksheet.getRow(9).getCell(6).value = 'QUANTITY'
        worksheet.getRow(9).getCell(7).value = 'AMOUNT'

        // MOVEMENT FORM DATA
        let ctr = 10
        for(const row of movement_details) {
            worksheet.getRow(ctr).getCell(1).value = row.ProductID
            worksheet.getRow(ctr).getCell(2).value = parseInt(row.barcode)
            worksheet.getRow(ctr).getCell(2).numFmt = '#'
            worksheet.getRow(ctr).getCell(3).value = row.Description
            worksheet.getRow(ctr).getCell(4).value = row.UOM
            worksheet.getRow(ctr).getCell(5).value = row.unitcost
            worksheet.getRow(ctr).getCell(6).value = parseFloat(row.qty)
            worksheet.getRow(ctr).getCell(7).value = parseFloat((row.unitcost*row.qty).toFixed(2))
            ctr++
        }
        let lastRow = parseInt(worksheet.lastRow._number)+1
        worksheet.getRow(lastRow).getCell(6).value = 'Total Quantity'
        worksheet.getRow(lastRow).getCell(6).style = { font: { bold:true } }
        worksheet.getRow(lastRow).getCell(7).value = total_quantity
        lastRow = lastRow+1
        worksheet.getRow(lastRow).getCell(6).value = 'Total Amount'
        worksheet.getRow(lastRow).getCell(6).style = { font: { bold:true } }
        worksheet.getRow(lastRow).getCell(7).value = parseFloat(total_amount)
  
        // BOLD COLUMNS
        worksheet.getRow(1).getCell(1).style = { font: { bold:true } }
        worksheet.getRow(3).getCell(1).style = { font: { bold:true } }
        worksheet.getRow(3).getCell(4).style = { font: { bold:true } }
        worksheet.getRow(3).getCell(7).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(1).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(2).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(3).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(4).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(5).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(6).style = { font: { bold:true } }
        worksheet.getRow(9).getCell(7).style = { font: { bold:true } }

        // COLUMN WIDTHS
        worksheet.getColumn('A').width = 33
        worksheet.getColumn('B').width = 35
        worksheet.getColumn('C').width = 45
        worksheet.getColumn('D').width = 32
        worksheet.getColumn('E').width = 35
        worksheet.getColumn('F').width = 25
        worksheet.getColumn('G').width = 32
        worksheet.getColumn('H').width = 35

        workbook.xlsx.writeFile(Helpers.publicPath()+'/files/'+`RSID${rs_id}.xlsx`)
        let fileName = `RSID${rs_id}.xlsx`
        let res = Env.get('APP_URL')+'/files/'+fileName
        response.status(200).send({ res, fileName })
    }
}

module.exports = RsBoController