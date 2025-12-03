'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Db = use('Database')
const moment = require('moment')

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

    async getBranch(branch_code) {
        let row = await Db.connection('mysql_91')
                          .select('name')
                          .from('0_branches')
                          .where('code', branch_code)
        await Db.close()
        return (row.length == 0) ? '' : row[0]
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
                                    .select('*')
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
                                    .andWhere('MovementCode', 'R2SSA')

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

    async getRmsDetails(branch_code, rs_id, supplier_code) {
        let row = await Db.connection(`${branch_code}_mysql`)
                                    .select('rs_date', 'supplier_code')
                                    .from('0_rms_header')
                                    .where('movement_no', rs_id)
                                    // .andWhere('trans_type', 53)
                                    .andWhere('movement_type', 'R2SSA')

        await Db.close()
        return (row.length == 0) ? '' : row[0]
    }

    async getRsCvNo(branch_code, movement_no) {
        let row = await Db.connection(`${branch_code}_mysql_aria`)
                                    .select('st.cv_id AS cv_id', 'cv.amount AS cv_amount')
                                    .from('0_supp_trans AS st')
                                    .leftJoin('0_cv_header AS cv', 'st.cv_id', 'cv.id')
                                    .where('st.supp_reference', `RS#${movement_no}`)
                                    .andWhere('st.type', 53)
                                    // .andWhere('movement_type', 'R2SSA')

        await Db.close()
        return (row.length == 0) ? '' : row[0]
    }

    async getRmsExtended(branch_code, rs_id) {
        let row = await Db.connection(`${branch_code}_mysql`)
                                    .select('price', 'qty')
                                    .from('0_rms_items')
                                    .where('rs_id', rs_id)

        await Db.close()
        return (row.length == 0) ? '' : row
    }

    // async getUndeducted(branch_code, start_date, end_date, supplier_name) {
    //     let bSql = await Db.connection('mysql_91')
    //                     .select('*')
    //                     .from('0_branches')
    //                     .where('code', branch_code)

    //     let sSql = `SELECT A.branch_code AS branch_code, A.branch_name as branch_name, A.supp_name AS supp_name,
    //     A.trans_no AS trans_no, A.type AS type, A.supplier_id AS supplier_id, A.reference AS reference, A.supp_reference AS supp_reference,
    //     A.tran_date AS tran_date, A.due_date AS due_date, A.ov_amount AS ov_amount, A.ov_discount AS ov_discount,
    //     A.ov_gst AS ov_gst, A.rate AS rate, A.alloc AS alloc, A.ewt AS ewt, A.del_date AS del_date, A.id AS id,
    //     A.cv_id AS cv_id, A.non_trade AS non_trade, A.ewt_percent AS ewt_percent, A.special_reference AS special_reference,
    //     A.is_cwo AS is_cwo, A.bank_trans_id AS bank_trans_id FROM (`

    //     let x = 0
    //     let aria_db
    //     for(const row of bSql) {
    //         if(x != 0) {
    //             sSql += ` UNION ALL `
    //         }
    //         sSql += ` SELECT '${row.code}' AS branch_code, '${row.name}' AS branch_name, Sup.supp_name AS supp_name, Spt.trans_no as trans_no,
    //         Spt.type AS type, Spt.supplier_id AS supplier_id, Spt.reference AS reference, Spt.supp_reference AS supp_reference,
    //         Spt.tran_date AS tran_date, Spt.due_date AS due_date, Spt.ov_amount AS ov_amount, Spt.ov_discount AS ov_discount,
    //         Spt.ov_gst AS ov_gst, Spt.rate AS rate, Spt.alloc AS alloc, Spt.ewt AS ewt, Spt.del_date AS del_date, Spt.id AS id,
    //         Spt.cv_id AS cv_id, Spt.non_trade AS non_trade, Spt.ewt_percent AS ewt_percent, Spt.special_reference AS special_reference,
    //         Spt.is_cwo AS is_cwo, Spt.bank_trans_id AS bank_trans_id FROM (${row.aria_db}.0_supp_trans Spt LEFT JOIN ${row.aria_db}.0_suppliers Sup ON 
    //         ((Spt.supplier_id = Sup.supplier_id))) WHERE ((Spt.type = 53) AND (Spt.cv_id = 0) AND (Spt.ov_amount <> 0) AND (Spt.tran_date >= ${moment(start_date).format('YYYY/MM/DD')}) 
    //         AND (Spt.tran_date <= ${moment(end_date).format('YYYY/MM/DD')}) AND (Sup.supp_name = '${supplier_name}')) `

    //         x++

    //         aria_db = `${row.aria_db}`
    //     }

    //     sSql += ` ) A ORDER BY A.supp_name, A.branch_code, A.tran_date`

    //     console.log(sSql)
    //     console.log(aria_db)


    //     // let res = await Db.connection(`${branch_code}_mysql`)
    //     //                 .raw(sSql)

    //     // console.log(res)
    // }

}

module.exports = new RsBo
