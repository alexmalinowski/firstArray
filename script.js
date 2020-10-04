var wrapperEle = document.body.querySelector(".wrapper");
var list = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];

for (var i = 0; i < list.length; i++) {
  if (list[i].health >= 10) {
    if (list[i].damage >= 2) {
      if (list[i].warrior == true) {
        personEle = document.createElement("div");
//         searchTerm = "a";
//         if (list[i].name.includes(searchTerm)) {
// document.getElementById("personEle").style.color = "red";
// The above lines of code make the list disappear. Below is the solution I was offered to fix the issue. It also makes the names disappear.
//         searchTerm = "a";
//         if (list[i].name.includes(searchTerm)) {
// document.body.getElementById("personEle").style.color = "red";
        personEle.innerHTML = list[i].name;
        wrapperEle.appendChild(personEle);
      }
    }
  }
}
// I tried placing the commented out code above in many places throughout the document over the course of at least 5 hours of troubleshooting. Every time I would receive an error. searchTerm and the if statement work properly, but the styling does not.