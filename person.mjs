import DomParser from 'dom-parser';
import fs from 'fs';

const result = JSON.parse(fs.readFileSync('./data.json'));

result.forEach(element => {
    for(let i in element) {
        console.log(i + ": " + element[i])
    }
});

fs.readFile('data.xml', 'utf8', function(err, data){ 
    const parser = new DomParser();
    const doc = parser.parseFromString(data, 'text/xml');
    const persons =doc.getElementsByTagName('person')
    console.log(persons.length)
    for(let i in persons) {
        const person = persons[i];
        console.log(person.nodeName);
        for(let j in person.childNodes) {
            if (person.childNodes.nodeType === 1) { 
                console.log(person.childNodes[j]);
            }
        }
    }
}); 

