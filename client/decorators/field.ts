interface IFieldOptions {
    title?: string;
    help?: string;
    required?: boolean;
    store?: boolean;
    compute?: string;
    related?: string;
    column?: string;
}

interface IEnumOptions extends IFieldOptions {
    selection: any;
}

interface IOne2manyOptions extends IFieldOptions {
    model: string;
}

export function String(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}

export function Integer(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}

export function Float(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}

export function Date(options?: IFieldOptions) {
    return {};
}

export function Datetime(options?: IFieldOptions) {
    return {};
}

export function Boolean(options?: IFieldOptions) {
    return {};
}

export function Enum(options: IEnumOptions) {
    return function(target: any, property: any) {

    };
}

export function Binary(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}

export function One2many(options: IOne2manyOptions) {
    return function(target: any, property: any) {

    };
}

export function Many2one(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}

export function Many2many(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}

export function One2one(options?: IFieldOptions) {
    return function(target: any, property: any) {

    };
}


