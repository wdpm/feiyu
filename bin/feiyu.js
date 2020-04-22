#!/usr/bin/env node
/**
 * Created by evan on 2020/4/22
 */
let cmd = require('commander');
let fs = require('fs');
let path = require('path');
let os = require('os');

let appInfo = require('../package.json');
let lineSeparator = os.EOL;

let dataSource = loadDataSource();

cmd.version(appInfo.version)
   .option('-i, --index <n>', 'specify index, default is random', -1, parseInt)
   .option('-t, --type <value>', '[animal|plant|anime]', 'anime', /^(animal|plant|anime)$/i)
   .on('--help', function () {
       console.log('\t' + appInfo.repository.url);
   })
   .parse(process.argv);

console.log(getElement(cmd.type, cmd.index, dataSource));

function loadDataSource() {
    let anime = readFileFromPath("anime.txt");
    let plants = readFileFromPath("plants.txt");
    let animals = readFileFromPath("animals.txt");

    return {
        plants: plants,
        animals: animals,
        anime: anime
    };

    function readFileFromPath(fileName) {
        return fs.readFileSync(path.join(__dirname, '../data/' + fileName))
                 .toString()
                 .split(lineSeparator);
    }
}

function getElement(type, index, dataSource) {
    switch (type) {
        case "animal":
            return getElementByIndex(index, dataSource.animals);
        case "plant":
            return getElementByIndex(index, dataSource.plants);
        case "anime":
            return getElementByIndex(index, dataSource.anime);
        default:
            return getElementByIndex(index, dataSource.anime);
    }

    /**
     * 返回数组中的一个元素
     *
     * @param index if -1 means random, otherwise check 0<=index<=N-1
     * @param arrays
     * @returns {*}
     */
    function getElementByIndex(index, arrays) {
        if (0 <= index && index <= arrays.length - 1) {
            return arrays[index];
        }

        // -1 === index or invalid index, return random element
        return arrays[Math.floor(Math.random() * arrays.length)];
    }
}

