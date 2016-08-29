import * as $ from 'jquery';
import * as greeter from './greeter';
import * as Database from './database';
import './index';

$(() => {
    Database.load((dataStore, error) => {
        window.clearDatabase = window.clearDatabase || (() => {
            dataStore.remove({}, { multi: true }, function (error, numRemoved) {
                if (error) console.log(`Unable to delete database due to error: ${JSON.stringify(error)}`);
            })});
        if (error) console.log(`Unable to load the database due to error: ${JSON.stringify(error)}`);
        $('h1').click(() => {
            dataStore.insert({ someData: 'Hello world'}, (error, document) => {
                console.log(JSON.stringify(document));
                dataStore.find({}, (error: any, docs: any) => {
                    console.log(JSON.stringify(docs));
                });
            });
        })
    });
});