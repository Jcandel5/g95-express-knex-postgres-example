
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolutions_table', (resolution_entity) => {
    resolution_entity.increments('id')
    resolution_entity.date('dueDate')
    resolution_entity.text('resolution')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resolutions_table')
};
