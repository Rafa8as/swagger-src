import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import compression from "express-compression";
import router from './routes/router.js';
import config from "./config/environment.config.js";
import initializePassport from "./config/passport.config.js";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import __dirname from "./directory.js";
import cors from 'cors';
import setupSocket from "./utils/socket.utils.js";
import logger from "./utils/logger.util.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from 'swagger-ui-express';



const PORT = 8080;
const host = "0.0.0.0";

mongoose.set('strictQuery', false)

const mongoUrl = config.MONGO_URL;
const MONGO_PASS = config.MONGO_PASS;
const cookieSecret = config.COOKIE_SECRET;

/*const environment = async ()=>{
    await mongoose.connect(mongoUrl)
    

}
environment()*/

const swaggerOptions = {
    definition: {
        openaip: '1.0.0',
        info: {
            title:' API documentation',
            version:"1.0.0",
            description: 'Backend Server in charge of managing: Products, Carts, Users (divided into User, Premium and Admin roles), Messages, Sessions, Tickets and Views. It is designed to provide a robust and secure service that allows customers to interact efficiently and securely with our platform. Technologies Used: Javascript, HTML, CSS, Mongo, Mongoose, Faker, Bcrypt, Dotenv, Cors, Cookie-parser, Express, Handlebars, Morgan, Nodemailer, Nodemon, Passport, Socket, Swagger, Twilio, Winston, among others.'
        },
    },
    apis: [`${__dirname}/docs/*.yaml`],
};

const specs = swaggerJSDoc(swaggerOptions);


const initializeApp = () => {
    const app = express();

   

    ;
    initializePassport();
    app.use(
        session({
            store: MongoStore.create({ mongoUrl }),
            secret: MONGO_PASS,
            resave: false,
            saveUninitialized: false,
        })
    );


    app.use(
        compression({
            brotli: {
                enable: true,
                zlib: {}
            },
        })
    )
    app.use(passport.initialize());
    app.use(passport.session());
    app.engine('handlebars', handlebars.engine());
    app.set('views', __dirname + '/views');
    app.set('view engine', 'handlebars');
    app.use(express.static(__dirname + '/public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(cookieSecret));
    app.use(morgan('dev'));
    app.use(cors());
    app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

    const httpServer = app.listen(PORT, host, () => {
        logger.info(`Server arriba en http://${host}: ${PORT}`);
    });
    setupSocket(httpServer);
    
   
   
    router(app);
};


console.log (__dirname)


export default initializeApp;

