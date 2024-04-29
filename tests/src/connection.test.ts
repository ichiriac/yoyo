import Connection from '../../client/connection';

describe('test connections', () => {
    let cnx:Connection;
    it('init connection', () => {
        cnx = new Connection({
            dsn: 'postgres://127.0.0.1:1337',
            username: 'root',
            db: 'test'
        });
    })
    it('define a model', () => {
        cnx.define()
    });
});