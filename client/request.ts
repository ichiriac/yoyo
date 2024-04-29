import Entity from "./entity";
import ModelTransaction from "./model";
import ResultSet from "./resultset";

export default class Request<T extends Entity> {
    protected model:ModelTransaction<T>;
    constructor(model:ModelTransaction<T>) {
        this.model = model;
    }
    async read():Promise<ResultSet<T>> {
        return null;
    }
}