const express = require('express')
const helmet = require('helmet')
const db = require('./data/db-config.js')
const projectsRouter = require('./data/projects-router')
const resourcesRouter = require('./data/resources-router')
const tasksRouter = require('./data/tasks-router')
const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

module.exports = server
