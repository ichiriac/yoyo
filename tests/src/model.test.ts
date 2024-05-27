import Connection from '../../client/connection';
import Model from '../../client/model';
import Entity from '../../client/entity';
import Transaction from '../../client/transaction';
import Request from '../../client/request';
import { entity, field, model, event } from '../../client/decorator'

describe("test annotations", () => {

    const cnx = new Connection({ db: 'test', username: 'test', dsn: 'sqlite://test.db' });

    @entity(cnx, 'foo')
    class FooEntity {
        
        @field.One2many({
            model: "foo"
        })
        public company_id: Promise<Entity>;

        @field.Enum({ 
            selection: { 
                "foo": "The foo value" 
            }
        })
        public state: string;

        @model()
        public static findAll() {

        }

        @event.before('create')
        public onCreate() {

        }

        @event.after('delete')
        public onDelete() {

        }
    }

    @entity(cnx, 'foo')
    class BarEntity extends Entity {
        
    }
    
    cnx.transaction(async (trx: Transaction) => {
        const bar = trx.model('foo').create({});
        const foo = new FooEntity();
    });

    
    /*
    @model(cnx, 'foo')
    class FooRepository extends Model<FooEntity> {
    
    }
    
    @request(cnx, 'foo')
    class FooRequest extends Request<FooRepository> {
    
    }
    */

});
