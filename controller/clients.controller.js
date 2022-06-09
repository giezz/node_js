const db = require("../db")

class ClientsController {
    async createClient(req, res){
        const {
            last_name,
            first_name,
            middle_name,
            company_name,
            phone,
            address
        } = req.body
        const newAccs = await db.query(`INSERT INTO public.client VALUES (DEFAULT, $1, $2, $3, $4, $5, $6) RETURNING *`, [last_name, first_name, middle_name, company_name, phone, address])
        res.json(newAccs.rows[0])
    }

    async getAllClients(req, res){
        const allAccs = await db.query('SELECT * FROM public.client')
        res.json(allAccs.rows)
    }
}

module.exports = new ClientsController()