
require('dotenv').config();
import express from 'express';
import { sequelize } from './models';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import nodeRoutes from './routes/nodeRoutes';
import logRoutes from './routes/logRoutes';
import configRoutes from './routes/configRoutes';
import adminRoutes from './routes/adminRoutes';
import planRoutes from './routes/planRoutes';
import { authenticate } from './middleware/auth';

const app = express();
app.use(express.json());

app.use('/api/admins', adminRoutes);
app.use('/api/users', authenticate, userRoutes);
app.use('/api/products', authenticate, productRoutes);
app.use('/api/nodes', authenticate, nodeRoutes);
app.use('/api/logs', authenticate, logRoutes);
app.use('/api/configs', authenticate, configRoutes);
app.use('/api/plans', authenticate, planRoutes);

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
