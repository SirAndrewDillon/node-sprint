exports.seed = function(knex) {
	return knex('projects').insert([
		{
			project_name: 'Locate the Greek',
			project_description:
				'Ut sint ex sint proident amet nisi non proident duis officia sunt eu ullamco.',
			completed: 0
		},
		{
			project_name: 'Fly the Airplane',
			project_description:
				'Lorem deserunt mollit veniam do officia irure in dolore aute.',
			completed: 0
		},
		{
			project_name: 'Dig a Ditch',
			project_description:
				'Exercitation velit qui veniam voluptate sit ad excepteur qui.',
			completed: 0
		}
	])
}
