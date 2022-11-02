const hobbies = require('./hobbies');
const express = require('express');
const app = express();

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
})

app.get('/', (req, res) => {
    res.send('Sample API');
})

app.get('/hobbies', async (req, res) => {
    res.send(hobbies.getHobbies());
})

app.get('/hobbies/:id', async (req, res) => {
    const id = req.params.id;
    const hobby = hobbies.getHobby(id);
    if(!hobby){
        res.status(404).send("Hobby not found");
        return;
    }
    res.send();
})

app.get('hobbies/:from/:to', async (req, res) => {
	const from = req.params.from;
	const to = req.params.to;
	res.send(hobbies.slice(from, to));
})

app.get('hobbies/not/:id', async (req, res) => {
	const id = req.params.id;
	res.send(hobbies.querySelectorAll(':not(' + id + ')'));
})