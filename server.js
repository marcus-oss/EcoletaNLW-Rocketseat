const express = require("express")
//executando  a função do express 
const server = express ()
//pegar o banco de dados 
const db = require("./database/db")
//configurar pasta publica 
server.use(express.static("public"))
//habilitar o usua do req.body 
server.use(express.urlencoded({extended:true}))
//usando template engine 
const nunjuncks = require("nunjucks")
nunjuncks.configure("src/views",{
express:server,
noCache:true
})
//configurando o caminho da aplicação  no servidor 
//pagina incial 
server.get("/", (req,res) => {
 return res.render("index.html")
})
//pagina criar ponto de coleta 
server.get("/create-point", (req,res) => {
 return res.render("create-point.html")


})
server.post("/savepoint",(req,res) =>{

 //  console.log(req.body)

   //inserir dados no banco de dados 
   //inserir dados na tabela 
//inserir dados na tabela 

const query =`
INSERT INTO places (
image,
name,
address, 
address2,
state,
city,
items

) VALUES (?,?,?,?,?,?,?);
`

const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
]

function afterInsertData(err){
if(err){
 return  console.log(err)
 //  return res.send("erro no cadastro!")
}
console.log("cadastrado com sucesso" )
console.log(this)
return res.render("create-point.html",{ saved:true })
}
db.run(query ,values ,afterInsertData)
 

}),
//pagina de  resultado de ponto de coleta 
server.get("/search", (req,res) => {

  const search = req.query.search
  if(search == ""){
    //pesquisa vazia 
return res.render("search-results.html", { total:0 })
}
    //pegar os dados do banco de dados 
    //consultar dados na tabela 
    // WHERE city LIKE '%${search}%' por algum motivo quando eu coloco essa linha no sql a aplicação buga e não consigo arrumar
db.all(`SELECT * FROM places`, function (err,rows){
    if(err) {
    return  console.log(err)
    
  }

const total = rows.length
 //mostrar a pagina html com dados do banco
 return res.render("search-results.html",{places: rows , total: total})
})

})
//ligar o servidor 
server.listen(5000)