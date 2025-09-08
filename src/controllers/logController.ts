
import { Request, Response } from 'express';
import { models } from '../models';

const { Log } = models;

export const getAllLogs = async (req: Request, res: Response) => {
  try {
    const logs = await Log.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLogById = async (req: Request, res: Response) => {
  try {
    const log = await Log.findByPk(req.params.id);
    if (log) {
      res.json(log);
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createLog = async (req: Request, res: Response) => {
  try {
    const log = await Log.create(req.body);
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLog = async (req: Request, res: Response) => {
  try {
    const [updated] = await Log.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedLog = await Log.findByPk(req.params.id);
      res.status(200).json(updatedLog);
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLog = async (req: Request, res: Response) => {
  try {
    const deleted = await Log.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
