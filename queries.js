const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)

function listAll(){
    return knex('resolutions').select().from('resolutions_table').orderBy('id','desc')
}
module.exports = {
    listAll,
    list(){
        return knex('resolutions_table')
    },
    read(id){
    },
    create(resolution){
    },
    update(id, resolution){
    },
    delete(id){
    }
};
