const db = require("../db")

class AccsesoriesController{
    async createAccs(req, res){
        // const {
        //     //test_name
        //     // description,
        //     // price,
        //     // quantity
        // } = req.body
        const {
            last_name,
            first_name,
            middle_name,
            company_name,
            phone,
            address
        } = req.body
        // const newAccs = await db.query(`INSERT INTO public.accessories VALUES(DEFAULT, $1 ,$2, $3) RETURNING *`, [description, price, quantity])
        // const newAccs = await db.query(`INSERT INTO public.test VALUES (DEFAULT, $1) RETURNING *`, [test_name])
        const newAccs = await db.query(`INSERT INTO public.client VALUES (DEFAULT, $1, $2, $3, $4, $5, $6) RETURNING *`, [last_name, first_name, middle_name, company_name, phone, address])
        res.json(newAccs.rows[0])
    }

    async getAllAccs(req, res){
        // const allAccs = await db.query('SELECT * FROM public.accessories')
        const allAccs = await db.query('SELECT * FROM public.test')
        res.json(allAccs.rows)
    }
}

module.exports = new AccsesoriesController()