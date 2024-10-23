import fs from 'fs';
import moment from 'moment';

class File {
    async createTxtFile(strPath, strText) {
        // await writeFile(<filename>, <text>, <callback>)
        const strDateTime = moment(new Date()).format('YYYY=MM-DD HH:mm:ss');
        await fs.writeFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}\n`, async (err) => {
            if (err) throw err;
        })
    }
    async appendTxtFile(strPath, strText) {
        // await writeFile(<filename>, <text>, <callback>)
        const strDateTime = moment(new Date()).format('YYYY=MM-DD HH:mm:ss');
        await fs.appendFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}\n`, { flag: 'a+'}, async (err) => {
            if (err) throw err;
        })
    }
}

export default new File();