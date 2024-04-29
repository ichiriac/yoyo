import ModelTransaction from "./model";

export default class Entity {
    protected values: { [property:string]: any };
    protected changes: { [property:string]: any };
    public readonly model:ModelTransaction<Entity>;
    constructor(model: ModelTransaction<Entity>, values: any) {
        this.model = model;
        this.changes = {};
        this.values = values;
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