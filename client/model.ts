import Column from "./column";
import Connection from "./connection";
import Request from "./request";
import Transaction from "./transaction";
import Entity from "./entity";
import ResultSet from "./resultset";

export default class Model<T extends Entity> {
    protected _columns:Column[];
    public readonly name:string;
    protected cnx:Connection;
    protected type: { new(model: any, values: any): T ;};
    constructor(name:string, columns:Column[] = []) {
        this.name = name;
        this._columns = columns;
    }
    get columns():Column[] {
        return this._columns;
    }
    setType(type: { new(model: any, values: any): T }) {
        this.type = type;
    }
    setConnection(cnx:Connection) {
        if (this.cnx) {
            throw new Error(
                `Connection is already defined`
            );
        }
        this.cnx = cnx;
    }
    extends(parent:Model<T>) {
        if (!this.type) {
            this.type = parent.type;
        }
        if (!this.cnx) {
            this.cnx = parent.cnx;
        }
        this._columns = parent.columns;
        Object.setPrototypeOf(Object.getPrototypeOf(this), Object.getPrototypeOf(parent));
    }
    transaction(trx:Transaction):ModelTransaction<T> {
        const result = new ModelTransaction<T>(this.name, this.columns, this.type, trx);
        result.setConnection(this.cnx);
        result.setType(this.type);
        return result;
    }
}


export class ModelTransaction<T extends Entity> extends Model<T> {
    public readonly trx:Transaction;
    protected entities: { [key:number]: T };

    constructor(name:string, columns:Column[] = [], trx:Transaction) {
        super(name, columns);
        this.trx = trx;
        this.entities = {};
    }
    /**
     * Deploy current structure to the database
     */
    async deploy() {
        // @todo
    }
    request():Request<T> {
        return new Request<T>(this);
    }
    async browse(ids:number[]): Promise<ResultSet<T>> {
        return null;
    }
    async get(id:number): Promise<T | null>{
        return null;
    }
    create(values:any): T {
        let entry = new this.type(this, values);
        this.entities[entry.id] = entry;
        return entry;
    }
    /**
     * FLushing all pending changes
     */
    async flush() {
        for(let k in this.entities) {
            if (this.entities[k].hasChanges()) {
                await this.entities[k];
            }
        }
    }
}