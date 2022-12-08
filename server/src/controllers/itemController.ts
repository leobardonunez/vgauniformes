import {Request , Response} from 'express';
import pool from '../database';

class ItemController {


    public async list(req: Request, res: Response){
        const items =  await pool.query('SELECT * FROM items');
        res.json(items);
    }

    public async listPantalones(req:Request , res: Response){
        const items = await pool.query('SELECT * FROM items WHERE linea= "Vestir"');
        res.json(items);
    }

    public async listCamisas(req: Request , res: Response){
        const items = await pool.query('SELECT * FROM items WHERE linea = "Polo"');
        res.json(items);
    }

    public async getOne(req: Request , res: Response): Promise<any>{
        const  { id } = req.params;
        const items = await pool.query('SELECT * FROM items WHERE id = ?' , [id]);

        if (items.length > 0){
            console.log('entro al ciclo');
            return res.json(items[0]);
        }
        res.status(404).json({text: 'The item doesn´t exists'});                
    }
    
    public async create(req: Request , res: Response): Promise<void>{
        await pool.query('INSERT INTO items set ?' , [req.body]);
        console.log(req.body);
        res.json({message: 'Item Saved'});
    }

    public async update(req: Request , res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE items set ? WHERE id = ?' , [req.body , id]);
        res.json({text: 'The item was update'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM items WHERE id = ?' , [id]);
        res.json({message: 'The item was deleted'})
    }
}

const itemController = new ItemController();
export default itemController;