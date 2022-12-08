import { Router } from 'express';

import itemController from '../controllers/itemController'
class ItemRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', itemController.list);
        this.router.get('/pantalones' , itemController.listPantalones);
        this.router.get('/camisas' , itemController.listCamisas);
        this.router.get('/:id', itemController.getOne);
        this.router.post('/', itemController.create);
        this.router.put('/:id' , itemController.update)
        this.router.delete('/:id' , itemController.delete);
    }
}

const itemRoutes = new ItemRoutes();
export default itemRoutes.router;