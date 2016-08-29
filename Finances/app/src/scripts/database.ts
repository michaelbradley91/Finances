import * as DataStore from 'nedb';
import * as path from 'path';

const databaseFilename = 'easyFinances.db';

export function load(callback: (dataStore: DataStore, error: Error) => void) {
    let db = new DataStore({
        filename: path.join(nw.App.dataPath, databaseFilename), 
        autoload: true,
        inMemoryOnly: false,
        onload: (error) => {
            callback(db, error)
        }
    });
}