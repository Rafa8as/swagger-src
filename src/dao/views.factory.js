import persistence from "../config/app.config.js";
import environment from "../../db/db.js";

let viewsDAO;

switch (persistence){
    case 'memory':
            const {default: MemoryDAO} = await import('./memory/views.memory.js');
            viewsDAO = MemoryDAO;
            break;
    case 'mongo':
         environment();
            const {default: MongoDAO} = await import ('./mongo/views.mongo.js');
            viewsDAO = MongoDAO;
            break;
}

export default viewsDAO;