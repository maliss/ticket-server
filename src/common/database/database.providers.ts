import { Sequelize } from 'sequelize-typescript';
import { Tickets } from 'src/tickets/tickets.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        protocol: 'postgres',
        host: 'ec2-54-81-37-115.compute-1.amazonaws.com',
        port: 5432,
        username: 'uxhvbbxpfpneeb',
        password: '9fa531b4a1139b159975921c13f61d39411eefbc43c6624d9637fff61b7d1850',
        database: 'd7lau3upsk9e6f',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      });
      sequelize.addModels([Tickets]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
