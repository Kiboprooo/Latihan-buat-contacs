import readline from "readline";
import process from "process";
import fs from "fs";



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//membuat folder data jika belum ada
if (!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}; 

//membuat file contacts.json jika belum ada
if (!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json', '[]', 'utf-8')
}; 

const tulisPertanyaan = (pertanyaan)=>{
    return new Promise((resolve, reject)=>{
        rl.question(pertanyaan, (name)=>{
            resolve(name);
        });
    });
};
const main = async ()=>{
    const name = await tulisPertanyaan('Masukkan nama anda? ');
    const email = await tulisPertanyaan('Masukkan email anda? ');
    const nomor = await tulisPertanyaan('Masukkan nomor anda? ');
    
        const contact = {name,email,nomor};
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        
        contacts.push(contact);
    
        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
        console.info(`Terimakasih ${name} sudah memasukkan data`);
        rl.close();
    };

main();



