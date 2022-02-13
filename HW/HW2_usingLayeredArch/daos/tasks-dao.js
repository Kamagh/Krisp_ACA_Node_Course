import fs from 'fs/promises';

export default () => {
    const readFileData = async () => {
        return JSON.parse(
            await fs.readFile('./tasks.json', 'utf-8')
        );
    }
    const writeData = async (fileData) => {
        await fs.writeFile('./tasks.json', JSON.stringify(fileData, null, 2))
    }

    return {
        getById: async (id) => {
            console.log(id)
            return (await readFileData())[id - 1]
        },
        getAll: async () => {
            return readFileData();
        },
        create: async (task) => {
            const fileData = (await readFileData())
            const length = fileData.length;
            task = {
                id: length + 1,
                ...task,
            }
            fileData.push(task);
            await writeData(fileData);
            console.log('Write complete')
        },
        deleteById: async (id) => {
            const fileData = (await readFileData())
            const deletedTask = fileData[id - 1];
            console.log(fileData)
            fileData.splice(id - 1, 1);
            console.log(fileData)
            fileData
                .slice(id - 1)
                .forEach(el => el.id--);
            console.log(fileData)
            await writeData(fileData);
            console.log('Write complete');
            return deletedTask;
        }

    }
}