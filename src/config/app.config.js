import dotenv from 'dotenv';

dotenv.config();

let environment = process.env.NODE_ENV;
if (!environment) environment= 'development';

let persistence;

if (environment.trim() === "local"){
    persistence = "memory";
} else {
    persistence = "mongo";
}

export default persistence;