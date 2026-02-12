const $listMessages = document.getElementById("messages")
const $newMessage = document.getElementById("new-message")
const $formMessage = document.getElementById("form-message")

//contenido de msjs
const messages = [
  {
    id: 1,
    text: "Hola, queres venir por un cafe?",
    time: "14:13",
    me: true
  },
  {
    id: 2,
    text: "si dale, a que hora?",
    time: "14:15",
    me: false
  },
  {
    id: 3,
    text: "Te parece a las 15.00?",
    time: "14:16",
    me: true
  },
  {
    id: 4,
    text: "bueno! Nos vemos en un ratito",
    time: "14:20",
    me: false
  }
]

const loadChats = () => {
  const data = JSON.parse(localStorage.getItem("messages"))
  if (data === null) {
    return messages
  }
  return data
}


const saveChats = (listOfMessages) => {
  localStorage.setItem("messages", JSON.stringify(listOfMessages))
  console.log("Msj guardados")
}


const renderMessages = (list) => {
  $listMessages.innerHTML = " "

  list.forEach((message) => {
    $listMessages.innerHTML += `
   <div class="message ${message.me ? ' me' : ' you'}">
   <p class="content">${message.text}</p>
   <p class="time">${message.time}</p>
   </div >
    `
  }
  )
}

const sendMessage = (event) => {
  const now = new Date()
  if (event.key === "Enter") {
    const newMessage = {
      text: $newMessage.value,
      me: true,
      time: now.getHours() + ":" + now.getMinutes()
    }

    //se agrega a la lista de mensajes y se renderiza 
    messages.push(newMessage)
    saveChats(messages)
    renderMessages(messages)

    //investigar salto de linea cuando resetea
    $formMessage.reset()
  }
}


//investigar forma de enviar mensaje con enter y con boton send

//$formMessage.addEventListener("submit", sendMessage)

$newMessage.addEventListener("keydown", (e) => { sendMessage(e) })

const initialMessages = loadChats()

renderMessages(initialMessages)