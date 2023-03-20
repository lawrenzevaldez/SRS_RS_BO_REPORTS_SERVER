'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Db = use('Database')

class RsBo extends Model {

    async getBranches() {
        let row = await Db.connection('mysql_91')
                          .select('code', 'name')
                          .from('0_branches')
                          .whereRaw("`name` NOT LIKE'%COMPALENGKE%' AND `name` NOT LIKE '%MINUYAN%' AND inactive = 0 AND `code` != 'srsbgt'")
                          .orderBy('name', 'asc')
        await Db.close()
        return (row.length == 0) ? '' : row
    }

    async getBranchDetails(branch_code, p_page, p_search, p_currentSort, p_currentSortDir) {
        let search = (p_search == null) ? '' : `%${p_search}%`
        let row = await Db.connection(`${branch_code}_mysql`)
                        .select('rs_id', 'rs_date', 'supplier_code', 'movement_type', 'movement_no', 'processed')
                        .from('0_rms_header')
                        .where('rs_id', 'like', search)
                        .orWhere('rs_date', 'like', search)
                        .orWhere('supplier_code', 'like', search)
                        .orWhere('movement_type', 'like', search)
                        .orWhere('movement_no', 'like', search)
                        .orderBy(p_currentSort, p_currentSortDir)
                        .paginate(p_page, 10)
        await Db.close()
        return (row.length == 0) ? '' : [row.data, row.lastPage]
    }

    async getBranchDetailsByDate(branch_code, p_page, p_search, p_currentSort, p_currentSortDir, d_from, d_to) {
        let search = (p_search == null) ? '' : `%${p_search}%`
        let row = await Db.connection(`${branch_code}_mysql`)
                        .select('rs_id', 'rs_date', 'supplier_code', 'movement_type', 'movement_no', 'processed')
                        .from('0_rms_header')
                        .whereBetween('rs_date', [d_from, d_to])
                        // .andWhere('rs_id', 'like', search)
                        // .orWhere('rs_date', 'like', search)
                        // .orWhere('supplier_code', 'like', search)
                        // .orWhere('movement_type', 'like', search)
                        // .orWhere('movement_no', 'like', search)
                        .orderBy(p_currentSort, p_currentSortDir)
                        .paginate(p_page, 10)
        await Db.close()
        return (row.length == 0) ? '' : [row.data, row.lastPage]
    }

    async getPickupDetails(branch_code, rs_id) {
        let row = await Db.connection(`${branch_code}_mysql`)
                                    .select('tname', 'tplate_no')
                                    .from('0_pickup_item')
                                    .where('trs_id', rs_id)

        await Db.close()
        return (row.length == 0) ? '' : row[0]
    }

    async getMovementHeader(branch_code, movement_no) {
        let row = await Db.connection(`${branch_code}_mssql`)
                                    .select('MovementID', 'ToDescription', 'VendorCode', 'ToAddress', 'ContactPerson', 'MovementCode', 'PostedDate', 'NetTotal', 'TotalQty')
                                    .from('Movements')
                                    .where('MovementNo', movement_no)

        await Db.close()
        return (row.length == 0) ? '' : row[0]
    }

    async getMovementDetails(branch_code, movement_id) {
        let row = await Db.connection(`${branch_code}_mssql`)
                                    .select('ProductID', 'barcode', 'Description', 'UOM', 'unitcost', 'qty')
                                    .from('MovementLine')
                                    .where('MovementID', movement_id)

        await Db.close()

        return (row.length == 0) ? '' : row
    }

}

module.exports = new RsBo
