exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			project_id: '1',
			task_description: 'Bopper',
			notes:
				'Est labore veniam ad non cupidatat ipsum quis reprehenderit amet est excepteur.',
			completed: 0
		},
		{
			project_id: '2',
			task_description: 'Turnip',
			notes:
				'Excepteur incididunt qui exercitation exercitation officia irure laborum dolor.',
			completed: 0
		},
		{
			project_id: '3',
			task_description: 'Rapture',
			notes: 'In ea consectetur labore cupidatat anim.',
			completed: 0
		}
	])
}
