'use strict'
const api = require('express').Router();
const db = require('../db');
const { Campus, Student } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req,res,next) => {
	Student.findAll({
		include: [Campus] // *** for EAGER LOADING ***
	})
	.then(students => {
		res.json(students)
	})
	.catch(next)
})

api.get('/students/:id', (req,res,next) => {
	Student.findOne({
		where: {
			id: Number(req.params.id)
		},
		include: [Campus]
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
		campusId: req.body.campusId,
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

api.delete('/students/:id', (req,res,next) => {
	Student.findOne({
		where: {
			id: Number(req.params.id)
		}
	})
	.then(student => {
		return student.destroy()
	})
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

api.get('/campuses', (req,res,next) => {
	Campus.findAll({
		order: [
			["id", "ASC"]
		]
	})
	.then(campuses => {
		res.json(campuses)
	})
	.catch(next)
})

api.get('/campuses/:id', (req,res,next) => {
	Campus.findOne({
		where: {
			id: Number(req.params.id)
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

api.put('/campuses/:id', (req,res,next) => {
	Campus.findOne({
		where: {
			id: Number(req.params.id)
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

api.delete('/campuses/:id', (req,res,next) => {
	Campus.findOne({
		where: {
			id: Number(req.params.id)
		}
	})
	.then(campus => {
		return campus.destroy()
	})
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
})

// error catcher
api.use(function (err,req,res,next) {
	res.status(500).send(err.message);
});

module.exports = api