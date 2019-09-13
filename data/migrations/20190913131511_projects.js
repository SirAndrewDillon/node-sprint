exports.up = function(knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments()
			tbl
				.string('project_name', 255)
				.notNullable()
				.unique()
			tbl.string('project_description', 5000)
			tbl
				.boolean('completed')
				.notNullable()
				.defaultTo(0)
		})
		.createTable('tasks', (tbl) => {
			tbl.increments()
			tbl.string('task_description', 5000).notNullable()
			tbl.string('notes', 2000)
			tbl
				.boolean('completed')
				.notNullable()
				.defaultTo(0)
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE')
		})
		.createTable('resources', (tbl) => {
			tbl.increments()
			tbl.string('resource_name', 255).notNullable()
			tbl.string('description', 5000)
		})
		.createTable('project_resources', (tbl) => {
			tbl.increments()

			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE')
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('resources')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE')
		})
}

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects')
}
