const components = require('./include/generated/components.d')
const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => render(req, res));
app.get('/hello', (req, res) => render(req, res, 'index', { text: 'Sarah Connor' }))

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views/partials'));

function render(req, res, template='index', data={}) {
    console.log("test:", template);
    res.render(`pages/${template}`, { ...data, ...components });
}

app.listen(3005, () => console.log("LISTENING!!!!!!!!!!!!!! (That's a lot of exclaimation points...!)"));
