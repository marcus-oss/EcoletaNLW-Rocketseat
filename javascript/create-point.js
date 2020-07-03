
function populateUFs(){
    const ufselect =document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res =>  res.json())
    .then(states =>{

        for ( const state of states ) {
            ufselect.innerHTML +=`<option value=" ${state.id}">${state.nome}</option>`
        }
          
    })
}
populateUFs()


function getCities(event){
    const Cityselect =document.querySelector("[name=city]")
    const stateInput =document.querySelector("[name=state]")
    const ufValue = event.target.value


    const indexOfselectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfselectedState].text
    

    const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/distritos`
    Cityselect.innerHTML ="<option value>Selecione a cidade </option>"
    Cityselect.disabled = true
    fetch(url)
    .then(res =>  res.json())
    .then(cities =>{
         for ( const city  of cities ) {
            Cityselect.innerHTML +=`<option value=" ${city.nome}">${city.nome}</option>`
        }
          Cityselect.disabled = false
    })
}


document.querySelector("select[name=uf]")
.addEventListener("change",getCities)

//itens de coleta 
//pegar itens do Li
const Itemstocollet = document.querySelectorAll(".items-grid li")

for( const item  of Itemstocollet){
    item.addEventListener("click", handleSelectedItem)


}
const collectedItems = document.querySelector("input[name=items]")

let selectedItems =  [1]

function handleSelectedItem(event){
   const itemLi = event.target
   //adicionar ou remover uma classe com javascript 

   itemLi.classList.toggle("selected") 
   
   
    const itemId = itemLi.dataset.id
    console.log('ITEM ID:',itemId)
//verificar se existe intens selecionadio se sim 
//pegar o itens selecionado 

const alreadySelected = selectedItems.findIndex( item  => {
    const itemFound = item ==itemId //isso será true ou falso 
    return itemFound
})

//se já tiver  selecionado tirar da seleção 

if(alreadySelected >= 0){
const filteredItems = selectedItems.filter (item => {
const itemDifferent = item !=  itemId
return itemDifferent

})
selectedItems = filteredItems
}else{
  // se não tiver selecionado 
   
   
   //adicionar a seleção 

   selectedItems.push(itemId)


}

 console.log('selectedItems:' , selectedItems)


   //atualizar o campo escondido com os dados  selecionados 
collectedItems.value = selectedItems
}