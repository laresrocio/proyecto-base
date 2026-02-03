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
const renderChats = () => {
  $listChats.innerHTML = ""
  chatsData.forEach((chat) => {
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
  const $chats = document.querySelectorAll(".chat")

  //accedo al valor ingresado al input
  const nameToSearch = $search.value.toLowerCase()

  //por cada chat hacer esto
  for (let i = 0; i < $chats.length; i++) {
    //defino variable para el i
    const chat = $chats[i]
    //selecciono el contenido textual del chat
    const $contactInfo = chat.querySelector("h3")
    const contactName = $contactInfo.textContent.toLowerCase()

    //proceso de buscado "si lo q estoy buscando aparece mostra solo eso"
    if (contactName.includes(nameToSearch)) {
      chat.style.display = "flex"
    } else {
      chat.style.display = "none"
    }
  }

}



// const searchChats = () => {
//   //accedo al valor ingresado al input
//   const nameToSearch = $search.value.toLowerCase()

//   //por cada chat hacer esto
//   for (let i = 0; i < $chats.length; i++) {
//     //defino variable para el i
//     const $chat = $chats[i]
//     //selecciono el contenido textual del chat
//     const $contactInfo = $chat.querySelector("h3")
//     const contactName = $contactInfo.textContent.toLowerCase()

//     //proceso de buscado "si lo q estoy buscando aparece mostra solo eso"
//     if (contactName.includes(nameToSearch)) {
//       $chat.style.display = "flex"
//     } else {
//       $chat.style.display = "none"
//     }
//   }

// }

$search.addEventListener("input", searchChats)
renderChats()