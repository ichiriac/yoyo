type EventTypeString = 'create' | 'delete' | 'update';

export function before(type:EventTypeString) {
    return function(target:any, description:any) {

    }
}

export function after(type:EventTypeString) {
    return function(target:any, description:any) {

    }
}