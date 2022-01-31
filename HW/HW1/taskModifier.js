const fs = require('fs');

const modifier = {
    get: (id) => {
        fs.readFile('tasks.json', 'utf8', (err, data) => {
                if (err) console.log(err);
                else {
                    const jsonFile = JSON.parse(data);
                    console.log(jsonFile[id - 1])
                }
            }
        );
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

        //task.id = tasks.length + 1;
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

modifier.add({a: "a", b: 'b'})







