const tab1 = [
  { user: "Julien",
    age : 20,
},
{ user: "Nathan",
    age : 25,

  },
  { user: "Jimmy",
    age: 28,
  },
  { user: "Valentin" ,
    age: 32,

  },
  { user: "Tiffany" ,
age: 17,
  }
];
tab1.forEach(function(item) {
  const containTab = document.querySelector('#tab1');
  let li = document.createElement('li');
  li.textContent = `Je m'appelle ${item.user} et j'ai ${item.age} ans`;
  li.classList.add('list-group-item');
  containTab.appendChild(li);
});

