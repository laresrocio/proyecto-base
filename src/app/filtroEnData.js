//referenciar elementos a manipular del html
const $search = document.getElementById("search")
const $listChats = document.querySelector(".listChats")


//simulacion de base de datos de chats
const chatsData = [
  {
    name: "Danyel Alejandro",
    lastMessage: "Vamos a tomar un mate",
    avatar: "https://placehold.co/150x150",
  },
  {
    name: "Silvina Paez",
    lastMessage: "Vamos al barrio chino?",
    avatar: "https://placehold.co/150x150",
  },
  {
    name: "Ileana Orue",
    lastMessage: "Queres venir a la pile?",
    avatar: "https://placehold.co/150x150",
  }
]


//funcion para renderizar chats
const renderChats = (list) => {

  if (list.length === 0) {
    $listChats.innerHTML = `<div class="empty"><h3>No hay chats para mostrar</h3></div>`
    return
  }

  $listChats.innerHTML = ""
  list.forEach((chat) => {
    $listChats.innerHTML += `
    <div class="chat">
       <img src="${chat.avatar}" alt="imagen de perfil">
          <div class="info-chat">
            <h3>${chat.name}</h3>
            <p>${chat.lastMessage}</p>
          </div>
    </div>`
  })
}

const searchChats = () => {
  const nameToSearch = $search.value.toLowerCase()
  const filteredChats = chatsData.filter((chat) => chat.name.toLowerCase().includes(nameToSearch))
  renderChats(filteredChats)
}

$search.addEventListener("input", searchChats)
renderChats(chatsData)