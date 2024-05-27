import Connection from "../connection";

export function model(cnx: Connection, name: string): ClassDecorator  {
    return function(target: any): any  {
        return target;
    };
};