import * as DataStore from 'nedb';
import * as path from 'path';

const databaseFilename = 'easyFinances.db';

export function load(callback: (dataStore: DataStore, error: string) => void) {
    let db = new DataStore({
        filename: path.join(nw.App.dataPath, databaseFilename), 
        autoload: true,
        inMemoryOnly: false,
        onload: (error) => {
            callback(db, JSON.stringify(error))
        }
    });
}