import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'tut3',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'behzad01',
  synchronize: false,
  entities: ['dist/**/*.entity{.js,.ts}'],
  migrations: ['dist/database/migrations/**/*{.js,.ts}'],
};
export default new DataSource(dataSourceOptions);
