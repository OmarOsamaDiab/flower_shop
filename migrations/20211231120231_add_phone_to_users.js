exports.up = function (knex, Promise) {
    return knex.schema.alterTable('users', t => {
        t.string('phone').unique().notNullable()
        t.unique('email')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('users', t => {
        t.dropCloumn('phone')
    })
};