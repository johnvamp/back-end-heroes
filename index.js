const express = require('express');
const fetch = require("node-fetch");
const cache = new Array();

//initialization
const app = express();
var cors = require('cors');
const accessToken = '4777642672253437';
const dir = 'https://superheroapi.com/api/';
//settings
app.use(cors());//permite peticiones de otros origenes, puertos
app.set('port', 3000);

//start server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})

app.get('/todosLosHeroes', (req, response) => {
    for (x = 1; x <= 731; x++) {
        fetch(dir + accessToken + '/' + x)
            .then(res => { return res.json() })
            .then((cont) => {
                cache.push([cont.id, cont.name, cont.image.url, cont.biography.alignment,
                cont.powerstats.intelligence, cont.powerstats.strength, cont.powerstats.speed,
                cont.powerstats.durability, cont.powerstats.power, cont.powerstats.combat, cont.biography.aliases,
                cont.biography.publisher, cont.biography.alignment, cont.appearance.gender, cont.appearance.race,
                cont.appearance.height, cont.appearance.weight]);
                return cache;
            })
    }
    response.send(cache);
})

