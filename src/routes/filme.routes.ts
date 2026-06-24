import { FilmeController } from "../controller/filme.controller";
import { Router } from "express";

const router = Router();
const filmecontroller = new FilmeController();

router.post('/',filmecontroller.create);
router.delete('/:id', filmecontroller.delete);
router.get('/',filmecontroller.findAll);
router.get('/:id',filmecontroller.findById);
router.put('/:id', filmecontroller.update);

export{router as filmeRoutes};