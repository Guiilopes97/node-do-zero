import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(()=>{
//     console.log('Tabela Deletada!')
// })


sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title VARCHAR(255),
        description TEXT,
        duration INT
    );
`.then(()=>{
    console.log('Tabela Criada!')
})