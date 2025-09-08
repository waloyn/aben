
import { Request, Response } from 'express';
import { models } from '../models';

const { Node } = models;

export const getAllNodes = async (req: Request, res: Response) => {
  try {
    const nodes = await Node.findAll();
    res.json(nodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNodeById = async (req: Request, res: Response) => {
  try {
    const node = await Node.findByPk(req.params.id);
    if (node) {
      res.json(node);
    } else {
      res.status(404).json({ error: 'Node not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNode = async (req: Request, res: Response) => {
  try {
    const node = await Node.create(req.body);
    res.status(201).json(node);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNode = async (req: Request, res: Response) => {
  try {
    const [updated] = await Node.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedNode = await Node.findByPk(req.params.id);
      res.status(200).json(updatedNode);
    } else {
      res.status(404).json({ error: 'Node not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNode = async (req: Request, res: Response) => {
  try {
    const deleted = await Node.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Node not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
