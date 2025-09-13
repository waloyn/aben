
import { Request, Response } from 'express';
import { Plan } from '../models/plan';

export const getPlans = async (req: Request, res: Response) => {
  try {
    const plans = await Plan.findAll();
    res.json(plans);
  } catch (error) { 
    res.status(500).json({ message: 'Error retrieving plans', error });
  }
};

export const getPlanById = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (plan) {
      res.json(plan);
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving plan', error });
  }
};

export const createPlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating plan', error });
  }
};

export const updatePlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (plan) {
      await plan.update(req.body);
      res.json(plan);
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating plan', error });
  }
};

export const deletePlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (plan) {
      await plan.destroy();
      res.json({ message: 'Plan deleted' });
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting plan', error });
  }
};
