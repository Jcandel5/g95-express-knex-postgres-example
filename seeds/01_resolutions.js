
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resolutions_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolutions_table').insert([
        {dueDate: '2018-09-12', resolution: 'learn knex'},
        {dueDate: '2018-09-12', resolution: 'learn knexi'},
        {dueDate: '2018-09-12', resolution: 'learn knexu'}
      ]);
    });
};
