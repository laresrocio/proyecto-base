//referenciar elementos a manipular del html
const $search = document.getElementById("search")

const $chats = document.querySelectorAll(".chat")

const searchChats = () => {
  //accedo al valor ingresado al input
  const nameToSearch = $search.value.toLowerCase()

  //por cada chat hacer esto
  for (let i = 0; i < $chats.length; i++) {
    //defino variable para el i
    const $chat = $chats[i]
    //selecciono el contenido textual del chat
    const $contactInfo = $chat.querySelector("h3")
    const contactName = $contactInfo.textContent.toLowerCase()

    //proceso de buscado "si lo q estoy buscando aparece mostra solo eso"
    if (contactName.includes(nameToSearch)) {
      $chat.style.display = "flex"
    } else {
      $chat.style.display = "none"
    }
  }

  //validar longitud de $chats
  const lengthChats = $chats.length

}

$search.addEventListener("input", searchChats)