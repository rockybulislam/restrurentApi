/** biome-ignore-all assist/source/organizeImports: <explanation> */
import dotenv from 'dotenv';
import server from './src/app.js';
dotenv.config();
//start server
server(3000);
