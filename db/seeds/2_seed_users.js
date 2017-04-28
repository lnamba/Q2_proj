
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'joe@joe.com', password: 'password1', name: 'Joe', about: 'I like apples.', role: 1},
        {email: 'jane@jane.com', password: 'password2', name:'Jane', about: 'I like French fries.', role: 2},
        {email: 'molly@molly.com', password: 'password3', name: 'Molly', about: 'I like tacos.', role: 2},
        {email: 'fred@fred.com', password: 'password4', name: 'Fred', about: 'I like pomegranates.', role: 2},
        {email: 'nancy@nancy.com', password: 'password5', name: 'Nancy', about: 'I like guacamole.', role: 2},
        {email: 'tim@tim.com', password: 'password6', name: 'Tim', about: 'I like pasta.', role: 2},
        {email: 'theresa@theresa.com', password: 'password7', name: 'Theresa', about: 'I like pizza.', role: 3}
      ]);
    });
};
