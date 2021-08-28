import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class UserController {
    // GET - ALL
    public async index(request: Request, response: Response) {        
        const connection = new Database().getConnection();
        const products = await connection.query("SELECT * FROM growdevloja.product");

        return response.json(products);
    }

    // GET - ONE
    public async show(request: Request, response: Response) {
        const { id } = request.params;
        const connection = new Database().getConnection();
        const product = await connection.query("SELECT * FROM growdevloja.product WHERE id = $1", [id])

        return response.json(product);
    }

    // POST - CREATE
    public async store(request: Request, response: Response) {
        const { name, description, category_id } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query("INSERT INTO growdevloja.product (name, description, category_id) VALUES ($1, $2, $3)",
                                              [name, description, category_id]);

        return response.json(result);
    }

    // PUT - UPDATE
    public async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description, category_id } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query("UPDATE growdevloja.product SET name = $1, description = $2, category_id = $3 WHERE id = $4",
                                              [name, description, category_id, id]);

        return response.json(result);
    }

    // DELETE - DELETE
    public async delete(request: Request, response: Response) {
        const { id } = request.params;
        const connection = new Database().getConnection();
        await connection.query("DELETE FROM growdevloja.stock WHERE product_id = $1", [id]);
        await connection.query("DELETE FROM growdevloja.product WHERE id = $1", [id]);

        return response.sendStatus(204);
    }
}

