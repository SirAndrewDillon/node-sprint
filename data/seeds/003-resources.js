exports.seed = function(knex) {
	return knex('resources').insert([
		{
			resource_name: 'The Panda Experience',
			description: 'Qui id velit irure consequat proident nulla dolor.'
		},
		{
			resource_name: 'The Dirty Oracle',
			description: 'Do occaecat sit et irure quis dolor quis officia.'
		},
		{
			resource_name: 'The Light Beyond',
			description: 'Irure nisi qui ullamco amet non officia Lorem.'
		}
	])
}
