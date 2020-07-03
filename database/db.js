//importar a dependecia do sqlite3 
const sqlite3 = require("sqlite3").verbose()
//iniciar o bjeto de banco de dados 
const db =  new  sqlite3.Database("./src/database/database.db")

module.exports = db
//utlizar o objeto para banco de dados 
//db.serialize(()=>{
//criar  uma tabela com comando SQL 
//db.run(`
//CREATE TABLE IF  NOT EXISTS places (
//id INTEGER PRIMARY KEY  AUTOINCREMENT,
  // image TEXT,
 //name TEXT,
 //address TEXT,
 //  address2 TEXT,
  //state TEXT, 
 // city TEXT,
 // items TEXT

//);
//`)
//inserir dados na tabela 

//const query =`
//INSERT INTO places (
  // image,
 // name,
 //  address, 
 //  address2,
 //  state,
  // city,
  //items

//) VALUES (?,?,?,?,?,?,?);
//`

//const values = [
  //  "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //"papersider",
    //"Guilherme gerbamma, jardim america",
   // "Numero 260",
   // " Santa catarina",
   // "Rio do sul",
   // "Residuos Eletronicos, lampadas"
//]

//function afterInsertData(err){
//if(err){
  //return  console.log(err)

//}
//console.log("cadastrado com sucesso" )
//console.log(this)

//}
//db.run(query ,values ,afterInsertData)


//consultar dados na tabela 
//db.all(`SELECT * FROM places `, function (err,rows){
  //  if(err){
    //    return  console.log(err)
    
   // }

   // console.log("aqui  estão os seus registros")
  // console.log(rows)

//})


//deletar dados na tabela 
//db.run(`DELETE FROM places WHERE id= ?`,[18], function(err){
  //  if(err){
    //    return  console.log(err)
    
  // }

//   console.log("registro deletado com sucesso")

//})


