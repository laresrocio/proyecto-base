//referenciar elementos a manipular del html
const $search = document.getElementById("search")

const $chats = document.querySelectorAll(".info-chat")

const searchChats = () => {
  console.log("buscando")
}

$search.addEventListener("enter", searchChats)