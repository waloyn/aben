
import { Request, Response } from 'express';
import { models } from '../models';

const { Config } = models;

export const getAllConfigs = async (req: Request, res: Response) => {
  try {
    const configs = await Config.findAll();
    res.json(configs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getConfigById = async (req: Request, res: Response) => {
  try {
    const config = await Config.findByPk(req.params.id);
    if (config) {
      res.json(config);
    } else {
      res.status(404).json({ error: 'Config not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createConfig = async (req: Request, res: Response) => {
  try {
    const config = await Config.create(req.body);
    res.status(201).json(config);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateConfig = async (req: Request, res: Response) => {
  try {
    const [updated] = await Config.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedConfig = await Config.findByPk(req.params.id);
      res.status(200).json(updatedConfig);
    } else {
      res.status(404).json({ error: 'Config not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteConfig = async (req: Request, res: Response) => {
  try {
    const deleted = await Config.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Config not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
