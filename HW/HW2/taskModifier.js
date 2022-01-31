const fs = require('fs');
const {json} = require("express");

const modifier = {
    get: (id) => {
        let data = fs.readFileSync('tasks.json', (err, data) => {
            if (err) console.log(err);
        });
        let jsonFile = JSON.parse(data);
        return jsonFile[id - 1]
    },

    add: (task) => {
        fs.readFile('tasks.json', 'utf8', (err, data) => {
                if (err) console.log(err);
                else {
                    let jsonFile = JSON.parse(data);
                    let length = jsonFile.length;
                    task = {id: length + 1, ...task};
                    jsonFile.push(task);
                    fs.writeFile('tasks.json', JSON.stringify(jsonFile, null, 2), err => {
                        if (err) console.log(err);
                        else {
                            console.log('Append complete')
                        }
                    });
                }
            }
        )
    },

    delete: (id) => {
        fs.readFile('tasks.json', 'utf-8', (err, data) => {
            if (err) console.log(err);
            else {
                const jsonFile = JSON.parse(data);
                jsonFile.splice(id - 1, 1);
                let i = 1;
                jsonFile.map(e => e.id = i++)
                fs.writeFile('tasks.json', JSON.stringify(jsonFile, null, 2), err => {
                    if (err) console.log(err);
                    console.log('Write complete')
                });
            }
        });
    }
}

console.log(modifier.get(2));
modifier.get(2);
module.exports = modifier;







