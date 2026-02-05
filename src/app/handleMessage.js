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
    console.log(newMessage)
  }
}

//$formMessage.addEventListener("submit", sendMessage)

$newMessage.addEventListener("keydown", (e) => { sendMessage(e) })


renderMessages(messages)