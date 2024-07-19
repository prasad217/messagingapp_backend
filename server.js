require('dotenv').config();
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import require from 'requirejs';
import cors from 'cors';

//import authRoutes from './routes/auth.js';
//import userRoutes from './routes/users.js';
//import chatRoutes from './routes/chat.js';


import { Sequelize } from 'sequelize';

const app = express();
app.use(cors());
const server = createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});



  const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "public")));

    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

  //  app.use('/api/auth', authRoutes);
   // app.use('/api/users', userRoutes);



  const PORT = process.env.PORT || 3000;

  server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
   try{
      await Sequelize.sync ({force:true});
       console.log('Database Synced');
    }
     catch (error){
        console.log(error);
   }  
  } );


