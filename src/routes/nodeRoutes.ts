
import { Router } from 'express';
import { getAllNodes, getNodeById, createNode, updateNode, deleteNode } from '../controllers/nodeController';

const router = Router();

router.get('/', getAllNodes);
router.get('/:id', getNodeById);
router.post('/', createNode);
router.put('/:id', updateNode);
router.delete('/:id', deleteNode);

export default router;
