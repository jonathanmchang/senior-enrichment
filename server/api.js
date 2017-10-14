'use strict'
const api = require('express').Router();
const db = require('../db');
const { Campus, Student } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req,res,next) => {
	Student.findAll({})
	.then(students => {
		res.json(students)
	})
	.catch(next)
})

api.get('/students/:id', (req,res,next) => {
	Student.findOne({
		where: {
			id: Number(req.params.id)
		}
	})
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

api.post('/students', (req,res,next) => {
	Student.create({
		name: req.body.name,
		age: req.body.age,
		email: req.body.email,
	})
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

api.put('/students/:id', (req,res,next) => {
	Student.findOne({
		where: {
			id: Number(req.params.id)
		}
	})
	.then(student => {
		return student.update(req.body)
	})
	.then(updatedstudent => {
		res.json(updatedstudent)
	})
	.catch(next)
})

api.get('/campuses', (req,res,next) => {
	Campus.findAll({})
	.then(campuses => {
		res.json(campuses)
	})
	.catch(next)
})

api.get('/campuses/:name', (req,res,next) => {
	Campus.findOne({
		where: {
			name: req.params.name
		}
	})
	.then(campuses => {
		res.json(campuses)
	})
	.catch(next)
})

api.post('/campuses', (req,res,next) => {
	Campus.create({
		name: req.body.name,
		imageurl: req.body.imageurl
	})
	.then(newcampus => {
		res.json(newcampus)
	})
	.catch(next)
})

api.put('/campuses/:name', (req,res,next) => {
	Campus.findOne({
		where: {
			name: req.params.name
		}
	})
	.then(campus => {
		return campus.update(req.body)
	})
	.then(updatedcampus => {
		res.json(updatedcampus)
	})
	.catch(next)
})

module.exports = api