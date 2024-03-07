var pierre = require("./pierre.js");

//console.log(pierre.run("feuille"));

const express = require('express')
const app = express()
const port = 3000

app.get('/res', (req, res, next) => { 
    let result = pierre.run(req.query.choice);
    let template = `<div style="padding:5px;">user:${req.query.choice}<br>
    computer: ${pierre.lastComputerChoice()}<br>
    Resultat: ${result}
    </div>`; 
  res.send(template);
});

app.get('/', (req, res) => {
    let render = `<form action="./res" method="get" class="form-example"><label for="choice">Choose:</label>
<select name="choice" id="choice">
  <option value="">--Please choose an option--</option>
  <option value="pierre">Pierre</option>
  <option value="feuille">Feuille</option>
  <option value="ciseaux">Ciseaux</option>
</select>
<input type="submit" value="Jouer" />
</form>
`;
  res.send(render);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})