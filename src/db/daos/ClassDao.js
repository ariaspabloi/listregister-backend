import {MongoDbContainer} from '../containers/MongoDbContainer.js';

class ClassDao extends MongoDbContainer {
    constructor() {
        super('class', 'db_listregister')
    }

    
}

export default ClassDao;