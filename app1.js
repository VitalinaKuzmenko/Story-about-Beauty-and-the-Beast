//const for game
const titleElement = document.getElementById("title");
const textElement = document.getElementById("text");
const imageElement = document.getElementById("img");
const optionButtonsElement = document.getElementById("option-buttons");
const fName = sessionStorage.getItem("fName");
const mName = sessionStorage.getItem("mName");

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  imageElement.setAttribute("src", textNode.imageLink);

  //showing title and text or hiding it
  if (textNode.id === 1) {
    titleElement.style.visibility = true ? "visible" : "hidden";
    titleElement.innerText = textNode.title;
    textElement.style.visibility = false ? "visible" : "hidden";
  } else {
    textElement.style.visibility = true ? "visible" : "hidden";
    textElement.innerText = textNode.text;
    titleElement.style.visibility = false ? "visible" : "hidden";
  }

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    title: "The story about Beauty and the Beast",
    imageLink: "media/first-page.jpg",
    options: [
      {
        text: "OPEN THE BOOK",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: `Once there was a girl. Her name was ${fName}. And she loved to read books about love. ${fName} herself dreamed of finding great love. But somehow, she was unhappy to meet anyone.`,
    imageLink: "media/2.jpg",
    options: [
      {
        text: "TURN THE PAGE",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: `One day ${fName} went to the forest to sit on the lawn under her favorite tree and read a book. She was reading for some time and didn’t notice how …`,
    imageLink: "media/3.jpg",
    options: [
      {
        text: `the beast ${mName} stood nearby and looked at her.`,
        nextText: 4,
      },
      {
        text: `the beast ${mName} jumped out of the bushes and jumped on her.`,
        nextText: 11,
      },
    ],
  },
  {
    id: 4,
    text: `${fName} looked back at him. And ${mName} continued to look at her. They were like 2 eccentrics, who cautiously looked at each other, not knowing what to do. Then ${fName} decided to be bolder and...`,
    imageLink: "media/4.jpg",
    options: [
      {
        text: "she asked him in a frightened voice: Who are you?",
        nextText: 5,
      },
      {
        text: `she decided to run away from the beast ${mName}.`,
        nextText: 8,
      },
    ],
  },
  {
    id: 5,
    text: `The beast ${mName} continued to stare at her. Then he abruptly grabbed her by the waist, threw her over his shoulder and started going somewhere. ${fName} screamed, after which the beast lowered her to the ground, looked straight into her eyes and said:`,
    imageLink: "media/5.jpg",
    options: [
      {
        text: "Don't be afraid of me, I won't hurt you.",
        nextText: 6,
      },
      {
        text: "Stop screaming, no one will hear you in this forest.",
        nextText: 9,
      },
    ],
  },
  {
    id: 6,
    text: `${fName} looked into his eyes and she immediately became somehow calmer. She remembered the book she had read so many times - \"Beauty and the Beast\". ${fName} always dreamed of being in the place of the main character.`,
    imageLink: "media/6.jpg",
    options: [
      {
        text: `${fName} carefully took a step towards him.`,
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    imageLink: "media/7.jpg",
    text: `${fName} kissed ${mName} and he turned into a frog. And they lived happily ever after! The End!`,
    options: [
      {
        text: "START AGAIN",
        nextText: 1,
      },
    ],
  },
  {
    id: 8,
    imageLink: "media/8.jpg",
    text: `But ${fName} didn't get far. The beast ${mName} quickly caught up with her, grabbed her by the waist, threw her over his shoulder and started going somewhere. ${fName} screamed, after which the beast lowered her to the ground, looked straight into her eyes and said:`,
    options: [
      {
        text: "Don't be afraid of me, I won't hurt you.",
        nextText: 6,
      },
      {
        text: "Stop screaming, no one will hear you in this forest.",
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    text: `The beast ${mName} understood that he frightened ${fName} with his appearance. Once he was a prince, but an evil witch turned him into a beast. He had long since forgotten how to court girls.`,
    imageLink: "media/9.jpg",
    options: [
      {
        text: `${mName} carefully took a step towards her.`,
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    imageLink: "media/10.jpg",
    text: `${mName} kissed ${fName} and she turned into a duck. And they lived happily ever after! The End!`,
    options: [
      {
        text: "START AGAIN",
        nextText: 1,
      },
    ],
  },
  {
    id: 11,
    text: `${fName} screamed and was very surprised when a huge shaggy beast ${mName} began to lick her cheek and wag its tail. So she decided…`,
    imageLink: "media/11.jpg",
    options: [
      {
        text: "scratch behind his ear.",
        nextText: 12,
      },
      {
        text: "lick his cheek too.",
        nextText: 15,
      },
    ],
  },
  {
    id: 12,
    imageLink: "media/12.jpg",
    text: `The beast ${mName} instantly fell on its back and began to ask for more tummy scratches. ${fName} was surprised why this beast behaves like a dog. She asked him: Who are you?`,
    options: [
      {
        text: "I’m the prince.",
        nextText: 13,
      },
      {
        text: "It doesn’t matter.",
        nextText: 16,
      },
    ],
  },
  {
    id: 13,
    imageLink: "media/13.jpg",
    text: `${fName} immediately remembered her favorite book "Beauty and the Beast". She dreamed of falling in love with her "beast" so many times. So she immediately believed him.`,
    options: [
      {
        text: `${fName} carefully took a step towards him.`,
        nextText: 14,
      },
    ],
  },
  {
    id: 14,
    imageLink: "media/14.jpg",
    text: `${fName} kissed ${mName} and he turned into a handsome prince. And they lived happily ever after! The End!`,
    options: [
      {
        text: "START AGAIN",
        nextText: 1,
      },
    ],
  },
  {
    id: 15,
    imageLink: "media/15.jpg",
    text: `The beast ${mName} was surprised that ${fName} licked him back. After all, he understood that he was behaving like an animal. For a long time, he was no longer a man, after the witch turned him into a beast. He looked into her eyes and ${fName} asked: Who are you?`,
    options: [
      {
        text: "I’m the prince. ",
        nextText: 13,
      },
      {
        text: "It doesn’t matter.",
        nextText: 16,
      },
    ],
  },
  {
    id: 16,
    imageLink: "media/16.jpg",
    text: `${mName} was afraid that ${fName} would not immediately believe him, that after a kiss he might turn into a prince. But he fell in love with her at first sight.`,
    options: [
      {
        text: `${mName} carefully took a step towards her.`,
        nextText: 17,
      },
    ],
  },
  {
    id: 17,
    imageLink: "media/17.jpg",
    text: `${mName} kissed ${fName}. Then he turned into a prince, and she turned into a monkey. And they lived happily ever after! The End!`,
    options: [
      {
        text: "START AGAIN",
        nextText: 1,
      },
    ],
  },
];

startGame();

let namesButton = document.querySelector(".names-button");
namesButton.addEventListener("click", function () {
  location.href = "index.html";
});
