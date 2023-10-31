import DomParser from 'dom-parser';
import fs from 'fs';

// Reading from Json file and print element
const result = JSON.parse(fs.readFileSync('./data.json'));
for (let i in result) {
    console.log(i);
    if (Array.isArray(result[i])) {
        result[i].forEach(arr => {
            for (let j in arr) {
                console.log(`    ${ j }: ${ arr[j] }`);
            }
        });    
    } else if(typeof result[i] === "object"){
        for(let j in result[i]) {
            console.log(`    ${ j }: ${ result[i][j]}`);
        }
        
    } else {
        console.log(`    ${ i }: ${ result[i] }`);
    }   
    console.log(`\n`);
}


// Reading from xml file and print element
fs.readFile('data.xml', 'utf8', function(err, data){ 
    const parser = new DomParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    const persons = xmlDoc.getElementsByTagName('person');
    
    for(let i in persons) {
        const person = persons[i];
        console.log(person.nodeName);
        for(let j in person.childNodes) {
            if (person.childNodes[j].nodeType === 1) { 
               console.log(person.childNodes[j].nodeName+ ": " + person.childNodes[j].textContent);
            } 
         }
    }
}); 

