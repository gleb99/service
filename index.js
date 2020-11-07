import {data} from './data.js'

let body = document.querySelector('body');
//////////////////////////////////////////////////// statically rendered elements
// add header
let header = document.createElement('header');
header.className = 'header';
body.append(header);

// add main
let main = document.createElement('main');
main.className = 'main';
body.append(main); 

// add nav
let nav = document.createElement('nav');
nav.className = 'nav';
main.append(nav);

// add mainWrap
let mainWrap = document.createElement('div');
mainWrap.className = 'mainWrap';
main.append(mainWrap);

// add employees counter
let employeesCounter = document.createElement('div');
employeesCounter.className = 'employeesCounter';
employeesCounter.innerHTML = `${data.length} employers displayed`;
nav.append(employeesCounter);

// add menu switch
let switchMenu = document.createElement('div');
switchMenu.className = 'employeesCounter';
nav.append(switchMenu);

// add icons
let cardIcon = document.createElement('img');
cardIcon.className = 'cardIcon';
cardIcon.src="images/girl.png";
switchMenu.append(cardIcon);

let tableIcon = document.createElement('img');
tableIcon.className = 'tableIcon';
tableIcon.src="images/girl.png";
switchMenu.append(tableIcon);

// add searchForm
let form = document.createElement('form');
form.id = 'searchForm';
mainWrap.append(form);

// add input
let input  = document.createElement('input');
input.type = 'text';
input.name = 'input';
input.className = 'input';
input.id = 'input';
input.value = 'John Smith / Джон Смит';
form.append(input);

// add button
let button  = document.createElement('input');
button.type = 'button';
button.name = 'button';
button.className = 'button';
button.id = 'button';
button.value = 'SEARCH'
form.append(button);

////////////////////////////////////////////////////// dynamically rendered elements

// add emplList
let emplList = document.createElement('div');
emplList.className = 'emplList';
mainWrap.append(emplList);

//////////////////////////////////////////////////// render list of elements, insert data

let addItemsArr = data.map(({nameRu, nameEn, depart, roomEmpl}) => {

//////////////////////// add emplItem element

//add emplItem
let emplItem = document.createElement('div');
emplItem.className = 'emplItem';
emplList.append(emplItem);

//add person info into the emplItem element
let personInfo = document.createElement('div');
personInfo.className = 'personInfo';
emplItem.append(personInfo);

//add location into the emplItem element
let locationInfo = document.createElement('div');
locationInfo.className = 'locationInfo';
emplItem.append(locationInfo);

//add emplPhoto into the person info element
let emplPhoto = document.createElement('div');
emplPhoto.className = 'emplPhoto';
personInfo.append(emplPhoto);

//add image of employee
let emplImg = document.createElement('img');
emplImg.className = 'emplImg';
emplImg.src="images/gir.png";
emplPhoto.append(emplImg);

//add enRuName into the person info element
let enRuName = document.createElement('div');
enRuName.className = 'enRuName';
personInfo.append(enRuName);

//add englishName into the enRuName element
let englishName = document.createElement('div');
englishName.className = 'englishName';
englishName.innerHTML= nameEn;
enRuName.append(englishName);

//add russianName into the enRuName element
let russianName = document.createElement('div');
russianName.className = 'russianName';
russianName.innerHTML= nameRu;
enRuName.append(russianName);

//add departament into the location info element
let departament = document.createElement('div');
departament.className = 'departament';
departament.innerHTML= depart;
locationInfo.append(departament);

//add room into the location info element
let room = document.createElement('div');
room.className = 'room';
room.innerHTML= roomEmpl;
locationInfo.append(room);

});

mainWrap.classList.add('flexSpBtw');
getCardStyles();

// change menu on icon click 
main.onclick = (evt) =>{
switch (evt.target.className) {
  case 'tableIcon':
    getTableStyles();
    break;
  case 'cardIcon':
    getCardStyles();
    break;

  default:
    break;
  }
}

// change styles functions

function getTableStyles() {
  emplList.classList.remove('flexSpBtw');
  let elements =  emplList.querySelectorAll('.emplItem');
  for (let elem of elements) {
    elem.classList.remove('card');
    elem.classList.add('table');
    let photo = elem.firstChild;
    photo.classList.add('flexSpBtw');
  };
  addTableHeaderBlock();
  console.log(elements);
}

function addTableHeaderBlock(){
  let checkHeader = document.querySelector('.thBlock');
  if (checkHeader === null || checkHeader.style.display === 'none'){
  let thBlock = document.createElement('div');
  thBlock.className = 'thBlock emplItem table';
  emplList.prepend(thBlock);

  let thPhoto = document.createElement('div');
  thPhoto.className = 'thPhoto';
  thPhoto.innerHTML = 'Photo';
  thBlock.append(thPhoto);

  let thName = document.createElement('div');
  thName.className = 'thName';
  thName.innerHTML = 'Name';
  thBlock.append(thName);

  let thDepartament = document.createElement('div');
  thDepartament.className = 'thDepartament';
  thDepartament.innerHTML = 'Departament';
  thBlock.append(thDepartament);

  let thRoom = document.createElement('div');
  thRoom.className = 'thRoom';
  thRoom.innerHTML = 'Room';
  thBlock.append(thRoom);
  }
}

  function getCardStyles(){
    let thEnable = document.querySelector('.thBlock')
    if (thEnable !== null){
      thEnable.style.display = 'none';
    }
    let elements =  emplList.querySelectorAll('.emplItem');
  for (let elem of elements) {
    elem.classList.remove('table');
    elem.classList.add('card');
    let photo = elem.firstChild;
    photo.classList.remove('flexSpBtw');
  };

  emplList.classList.add('flexSpBtw');

  };
