import Connection from "./connection";
import Entity from "./entity";
import { ModelTransaction } from "./model";

export default class Transaction {
    protected cnx:Connection;
    protected models: { [name:string]: ModelTransaction<Entity>};
    constructor(cnx:Connection) {
        this.cnx = cnx;
        this.models = {};
    }
    model(name:string): ModelTransaction<Entity> {
        if (!this.models[name]) {
            this.models[name] = this.cnx.model(name).transaction(this);
        }
        return this.models[name];
    }
    async commit() {
        // @todo

    }
    async rollback() {
        // @todo
    }
}