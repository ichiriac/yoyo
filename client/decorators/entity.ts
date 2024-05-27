import Connection from "../connection";
import Entity from "../entity";
export function entity(cnx: Connection, name: string)  {
    return function(ctor: typeof Entity) {
        ctor._model = cnx.model(name);
    };
};