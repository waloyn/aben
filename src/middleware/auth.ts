
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET || 'mysecret', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }

      (req as any).user = user;
      next();
    });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
