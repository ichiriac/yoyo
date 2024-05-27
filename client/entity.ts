import ModelTransaction from "./model";

export default class Entity {
    protected static _model: ModelTransaction<Entity>;
    protected values: { [property:string]: any };
    protected changes: { [property:string]: any };
    constructor(values: any = {}) {
        this.changes = {};
        this.values = values;
    }

    /**
     * Gets the model instance
     */
    get model(): ModelTransaction<Entity> {
        return Entity._model;
    }

    /**
     * Gets the entity identifier
     */
    get id(): number {
        return this.values['id'];
    }
    /**
     * Check if any changes needs to be flushed
     * @returns True is any changes is pending to be flushed
     */
    hasChanges(): boolean {
        if (this.values['id'] > 0) {
            return Object.keys(this.changes).length > 0;
        }
        return true;
    }
    async delete() {
        // @todo
    }
    /**
     * Flush pending changes to current method
     */
    async flush() {

    }
}