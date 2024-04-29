import Entity from "./entity";
import Model from "./model";
import Transaction from "./transaction";


export interface IConnectionOptions {
    dsn:string;
    db:string;
    username:string;
    password?:string;
}


export default class Connection {
    protected options: IConnectionOptions;
    protected models: { [name:string]: Model<Entity> };
    constructor(options: IConnectionOptions) {
        this.options = options;
        this.models = {};
    }
    model(name:string): Model<Entity> {
        if (!this.models[name]) {
            throw new Error(
                `Undefined model '${name}', please check defined models`
            );
        }
        return this.models[name];
    }
    define(model: Model<Entity>) {
        if (this.models[model.name]) {
            model.extends(this.models[model.name]);
        } else {
            model.setConnection(this);            
        }
        this.models[model.name] = model;
    }
    
    async transaction(callback: (transaction:any) => Promise<void>) {
        const tr = new Transaction(this);
        try {
            await callback(tr);
            await tr.commit();
        } catch(err) {
            await tr.rollback();
            throw err;
        }
    }
}