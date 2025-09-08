
import { sequelize, models } from './models';

const { User, Product, Node, Log, Config, Admin } = models;

const seedDatabase = async () => {
  try {
    // Connect to the database and sync models
    await sequelize.sync({ force: true }); // force: true will drop tables if they exist
    console.log('Database synced!');

    // Create Admin
    await Admin.create({
      username: 'admin',
      password: 'password', // will be hashed by the hook
    });
    console.log('Admin user created.');

    // Create Users
    await User.bulkCreate([
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ]);
    console.log('Users created.');

    // Create Products
    await Product.bulkCreate([
      { name: 'Laptop', price: 1200 },
      { name: 'Keyboard', price: 75 },
      { name: 'Mouse', price: 25 },
    ]);
    console.log('Products created.');

    // Create Nodes
    await Node.bulkCreate([
      { name: 'Node-1', ipAddress: '192.168.1.1' },
      { name: 'Node-2', ipAddress: '192.168.1.2' },
    ]);
    console.log('Nodes created.');

    // Create Logs
    await Log.bulkCreate([
      { level: 'info', message: 'Application started' },
      { level: 'error', message: 'Something went wrong' },
    ]);
    console.log('Logs created.');

    // Create Configs
    await Config.bulkCreate([
      { key: 'theme', value: 'dark' },
      { key: 'notifications', value: 'enabled' },
    ]);
    console.log('Configs created.');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
