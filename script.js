document.body.style.cssText = `color: #6f00f1; text-transform : capitalize; font-family: 'Cairo', sans-serif;`

let header = document.createElement('header');

header.classList.add('header')


window.addEventListener('scroll' , function() {
    if(scrollY >= 19.200000762939453)
    {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
})


header.style.setProperty('display' , 'flex');
header.style.setProperty('flex-flow' , 'row wrap');
header.style.setProperty('justify-content' , 'space-around');
header.style.setProperty('padding' , '20px');

document.body.appendChild(header);

let logo = document.createElement('h1');

let logoContent = document.createTextNode('ziad');

logo.appendChild(logoContent);

header.appendChild(logo);

let list = document.createElement('ul');

list.classList.add('hide')


let listLinks = ["home" , "about"  , "skills" , "portfolio" , "contact us"];


for(let i = 0; i < listLinks.length; i++)
{
    let listSection = document.createElement('li');
    let linksSection = document.createElement('a');
    linksSection.setAttribute("href" , "#" + listLinks[i])
    listSection.appendChild(linksSection);
    let contentList = document.createTextNode(listLinks[i]);
    linksSection.appendChild(contentList);
    list.appendChild(listSection);
    listSection.style.cssText = " display : inline-block; margin : 10px 20px; cursor : pointer";
    linksSection.style.textDecoration = "none";
    linksSection.style.color = "#6f00f1";
}

let nav_bar = document.createElement('i');

nav_bar.classList.add('fa-solid');
nav_bar.classList.add('fa-bars');
nav_bar.classList.add('nav-bar');

nav_bar.style.cssText = " display : none; margin : 20px; cursor : pointer";


header.appendChild(list);
header.appendChild(nav_bar);


let main = document.createElement('section');

main.id = "home";

main.classList.add("welcome")

main.style.display = "flex";
main.style.flexFlow = "row wrap";
main.style.justifyContent = "space-around";
main.style.backgroundColor = "#fff";
main.style.width = "100%";
main.style.height = "500px";

document.body.appendChild(main);

let partLeft = document.createElement('div');

let hello = document.createElement('h2');

hello.style.marginTop = "30%";
hello.style.marginLeft = "2%";
hello.style.fontSize = "15px";

let contentHello = document.createTextNode('hello, my name is ziad ahmed');

hello.appendChild(contentHello);

partLeft.appendChild(hello);

partLeft.style.width = "500px"

main.appendChild(partLeft);

let partRight = document.createElement('div');

let imageInPartRight = document.createElement('img');

imageInPartRight.classList.add("animation-img")

imageInPartRight.src = "Solution-07.jpg";

partRight.appendChild(imageInPartRight);

main.appendChild(partRight);

partRight.style.width = "500px";

let Work = "i am web developer & designer";

let i = 0;

let iAm = document.createElement('h3');
iAm.style.height = "fit-content";
iAm.style.padding = "10px";
iAm.style.marginLeft = "2%";
iAm.style.fontSize = "50px";

iAm.setAttribute('class' , 'who-am-i');

partLeft.appendChild(iAm);

partLeft.classList.add('welocne-left')

let sendMe = document.createElement('button');

let contentSendMe = document.createTextNode('send me');

sendMe.appendChild(contentSendMe);

sendMe.style.cssText = `background-color: #68b5ff; border : none; color: #6f00f1; padding : 10px 20px; margin-left : 2%; border-radius : 5px; cursor : pointer; opacity : 0`;


sendMe.addEventListener('click' , function() {
    location.href = "index.html";
})

partLeft.appendChild(sendMe);

let whoAmI = setInterval(function() {
    let contentIAm = document.createTextNode(Work[i]);
    iAm.appendChild(contentIAm);
    i++;
    if(Work[i] == Work[Work.length])
    {
        clearInterval(whoAmI)
        sendMe.classList.add("show");
    }
}, 100);

let About = document.createElement('section');


About.id = "about"

About.classList.add("about");

About.style.setProperty('width' , '100%');
About.style.setProperty('height' , '800px');


let titleAbout = document.createElement('h4');

titleAbout.style.textAlign = "center";
titleAbout.style.fontSize = "30px";

titleAbout.classList.add('before-after');

let contentTitleAbout = document.createTextNode('about me');

titleAbout.appendChild(contentTitleAbout);

About.appendChild(titleAbout);

document.body.appendChild(About);


let parentAbout = document.createElement('div');

parentAbout.style.display = "flex";
parentAbout.style.flexFlow = "row wrap";
parentAbout.style.justifyContent = "space-around";
parentAbout.style.width = "90%";
parentAbout.style.margin = "0 auto";
parentAbout.style.padding = "20px";
parentAbout.style.borderRadius = "10px";
parentAbout.style.opacity = "0";

let firstChildAbout = document.createElement('div');

firstChildAbout.classList.add('about-me')

firstChildAbout.style.width = "450px"

let wordsAbout = document.createElement('p');

let contentWordAbout = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie commodo porta. Ut eleifend libero ac dictum blandit. Nunc dignissim malesuada tellus, vitae tempus felis pellentesque et. Cras malesuada mi et condimentum gravida. Morbi quis dui consectetur, varius felis non, molestie arcu. Curabitur arcu augue, suscipit quis purus a, lobortis malesuada est. Cras viverra tincidunt eros ut porttitor. Duis posuere nisl sapien, non laoreet tellus auctor id.

Integer non volutpat dolor. Sed laoreet iaculis dolor vel cursus. Nullam fringilla, ex eget tempor egestas, nisi nibh convallis libero, ut rhoncus est erat et diam. Integer hendrerit, tellus non cursus consequat, ipsum metus varius dolor, vel sollicitudin leo justo quis mauris. Ut vel metus quis sapien faucibus faucibus. Ut dignissim sapien sit amet sapien dictum ullamcorper. Donec interdum sed massa sollicitudin hendrerit. Morbi sapien massa, tincidunt ac turpis eget, mollis sagittis orci. Integer non vehicula risus, ultricies tincidunt tortor.

In sit amet hendrerit purus, eu lacinia libero.`);

wordsAbout.style.padding = "10px"

wordsAbout.appendChild(contentWordAbout);

let meMore = document.createElement('button');

let contentMeMore = document.createTextNode('me more');

meMore.appendChild(contentMeMore);

meMore.style.cssText = `background-color: #68b5ff; border : none; color: #6f00f1; padding : 10px 20px; margin-left : 2%; border-radius : 5px; cursor : pointer;`;

firstChildAbout.appendChild(wordsAbout);
firstChildAbout.appendChild(meMore);

let secondChildAbout = document.createElement('div');

secondChildAbout.style.width = "450px"

let Hero = document.createElement('img');

Hero.classList.add('hero')

Hero.src = "IMG-20220316-WA0051.jpg";

Hero.style.width = "90%"

secondChildAbout.appendChild(Hero)

parentAbout.appendChild(firstChildAbout);
parentAbout.appendChild(secondChildAbout);

About.appendChild(parentAbout);



window.addEventListener('scroll', function() {
    if(scrollY >= 200.8000030517578)
    {
        parentAbout.classList.add('SHOW');
    }
});

let sectionSkills = document.createElement("section");


sectionSkills.id = "skills";

sectionSkills.classList.add('skill')


sectionSkills.style.setProperty("width" , "100%");
sectionSkills.style.setProperty("height" , "600px");
document.body.appendChild(sectionSkills);

let titleSkills = document.createElement('h4');

titleSkills.classList.add("before-after");

let contentTitleSkills = document.createTextNode('skills');

titleSkills.appendChild(contentTitleSkills);

titleSkills.style.textAlign = "center";
titleSkills.style.fontSize = "30px";

sectionSkills.appendChild(titleSkills);

let parentSkills = document.createElement("div");
sectionSkills.appendChild(parentSkills);

parentSkills.style.position = "relative"


parentSkills.style.display = "flex";
parentSkills.style.flexFlow = "row wrap";
parentSkills.style.justifyContent = "center";
parentSkills.style.marginTop = "50px";


let partRightSkills = document.createElement('div');
let lineSkills = document.createElement('div');
let partLeftSkills = document.createElement('div');


partLeftSkills.style.setProperty('padding' , '10px');
// partLeftSkills.style.setProperty('background-color' , '#6f00f19c');
partLeftSkills.style.setProperty('border-radius' , '20px');
partLeftSkills.style.setProperty('overflow' , 'hidden');


let TitlePartLeftSkills = document.createElement('h5');

TitlePartLeftSkills.style.color = "#6f00f1";
TitlePartLeftSkills.style.textAlign = "center";
TitlePartLeftSkills.style.fontSize = "20px";

let ContentTitlePartLeftSkills = document.createTextNode('web desgin');

TitlePartLeftSkills.appendChild(ContentTitlePartLeftSkills);

let listPartLeftSkils = document.createElement('ul');

let skillsWebDesign = ["html" , "css" , "js" , "bootstrap and jquery" , "adobe XD" , "photoshop"];

for(let i = 0; i < skillsWebDesign.length; i++)
{
    let list = document.createElement('li');
    list.classList.add('skills-list')
    list.style.margin = "20px 40px"
    list.style.color = "#6f00f1"
    let listContent = document.createTextNode(skillsWebDesign[i]);
    list.appendChild(listContent);
    listPartLeftSkils.appendChild(list);
}


partLeftSkills.appendChild(TitlePartLeftSkills);

partLeftSkills.appendChild(listPartLeftSkils);



lineSkills.style.setProperty('width' , '5px');
lineSkills.style.setProperty('height' , '400px');
lineSkills.style.setProperty('margin' , '20px 20px');
lineSkills.style.setProperty('border-radius' , '20px');
lineSkills.style.setProperty('background-color' , '#6f00f1');


lineSkills.classList.add('line-skills');

lineSkills.classList.add("balls");

partRightSkills.style.setProperty('padding' , '10px');
// partRightSkills.style.setProperty('background-color' , '#6f00f19c');
partRightSkills.style.setProperty('border-radius' , '20px');
partRightSkills.style.setProperty('overflow' , 'hidden');


let TitlePartRightSkills = document.createElement('h5');

TitlePartRightSkills.style.color = "#6f00f1";
TitlePartRightSkills.style.textAlign = "center";
TitlePartRightSkills.style.fontSize = "20px";

let ContentTitlePartRightSkills = document.createTextNode('web developer');

TitlePartRightSkills.appendChild(ContentTitlePartRightSkills);

partRightSkills.appendChild(TitlePartRightSkills);

let skillsWEbDeveloper = ["php" , "vue.js" , "C programming" , "python"];

let listPartRightSkils = document.createElement('ul');

for(let i = 0; i < skillsWEbDeveloper.length; i++)
{
    let listPartRightSkills = document.createElement('li');
    listPartRightSkills.classList.add('skills-list')
    listPartRightSkills.style.margin = "20px 40px"
    listPartRightSkills.style.color = "#6f00f1"
    let contentListRightSkills = document.createTextNode(skillsWEbDeveloper[i]);
    listPartRightSkills.appendChild(contentListRightSkills);
    listPartRightSkils.appendChild(listPartRightSkills);
}

partRightSkills.appendChild(listPartRightSkils)

parentSkills.appendChild(partRightSkills);
parentSkills.appendChild(lineSkills);
parentSkills.appendChild(partLeftSkills);

window.addEventListener('scroll' , function() {
    if(scrollY >= 659)
    {
        partRightSkills.classList.add("move");
        partLeftSkills.classList.add("move");
    }
})

let portfolioSection = document.createElement("section");

portfolioSection.id = "portfolio";

portfolioSection.classList.add('portfolio')

let parentPortfolio = document.createElement('div');

parentPortfolio.classList.add('parentPortfolio')

parentPortfolio.style.cssText = `display : flex; flex-flow: row wrap; justify-content: space-around; width: 100%; height: fit-content;`;

portfolioSection.style.setProperty("width" , "100%");
// portfolioSection.style.setProperty("height" , "600px");

let portfolioTitle = document.createElement('h5');

portfolioTitle.style.color = "#6f00f1";
portfolioTitle.style.textAlign = "center";
portfolioTitle.style.fontSize = "30px";

let contentportfolioTitle = document.createTextNode("portfolio");

portfolioTitle.appendChild(contentportfolioTitle);

portfolioSection.appendChild(portfolioTitle)

document.body.appendChild(portfolioSection);

portfolioSection.appendChild(parentPortfolio);

function Card(image="" , title , link) {
    let card = document.createElement('div');
    card.classList.add('card')
    card.style.height = "fit-content";
    card.style.width = "fit-content";
    card.style.background = "#eee";
    card.style.borderRadius = "20px"
    card.style.margin = "20px"
    card.style.padding = "10px"

    let img = document.createElement('img');
    img.classList.add('img-portfolio')
    img.style.borderRadius = "20px"
    img.style.width = "350px"
    img.src = image;
    card.appendChild(img);

    let linkPortfolio = document.createElement('a');
    linkPortfolio.style.display = "block"
    linkPortfolio.style.textDecoration = "none"
    linkPortfolio.style.color = "#6f00f1"
    linkPortfolio.style.fontSize = "20px"
    linkPortfolio.classList.add('goTo')
    linkPortfolio.href = link;
    linkPortfolio.target = "_blank"

    let contentLink = document.createTextNode(title);

    linkPortfolio.appendChild(contentLink);

    card.appendChild(linkPortfolio)

    parentPortfolio.appendChild(card);
}

let images = ["projects/inphone.PNG" , "projects/we_here.PNG" , "projects/ktabk.PNG"]
let title = ["iphone" , "we here" , "ktabk"];
let link = ["https://ziadahmedfawzy.github.io/ipohne/" , "https://ziadahmedfawzy.github.io/main_we-here/" , "https://ziadahmedfawzy.github.io/book_store/"];

for(let i = 0; i < images.length; i++)
{
    Card(images[i] , title[i] , link[i]);
};

let ContactSection = document.createElement('section');

ContactSection.id = "contact us";

ContactSection.style.margin = "30px 0"

document.body.appendChild(ContactSection);

let TitleContact = document.createElement('h4');

TitleContact.style.color = "#6f00f1";
TitleContact.style.textAlign = "center";
TitleContact.style.fontSize = "30px";

let contentTitleContact = document.createTextNode('contact me');

TitleContact.appendChild(contentTitleContact)

ContactSection.appendChild(TitleContact);

let parentContact = document.createElement('div');

parentContact.style.display = "flex"
parentContact.style.flexFlow = "row wrap"
parentContact.style.justifyContent = "center"

parentContact.classList.add('contact')

ContactSection.appendChild(parentContact);

let partLeftContact = document.createElement('div');

partLeftContact.style.width = "40%";

partLeftContact.classList.add('parent-left-contact');

partLeftContact.style.height = "fit-content";

let partrightContact = document.createElement('div');


partrightContact.style.width = "40%";

partrightContact.classList.add('parent-left-contact');

partrightContact.style.height = "fit-content";

let lineContact = document.createElement('div');

lineContact.classList.add('balls');

lineContact.classList.add('hide')

lineContact.style.width = "5px";
lineContact.style.height = "400px";
lineContact.style.background = "#6f00f1";
lineContact.style.borderRadius = "20px";
lineContact.style.marginTop = "40px";

parentContact.appendChild(partLeftContact);
parentContact.appendChild(lineContact);
parentContact.appendChild(partrightContact);


let listContent = document.createElement('ul');

listContent.style.marginTop = "40px";
listContent.style.marginLeft = "20px";


let info = ["phone : +20 1121 530 044" , "email : ziadbusiness2000@gmail.com" , "location : egypt cairo helwan"];

for(let i = 0; i < info.length; i++)
{
    let list = document.createElement('li');
    list.style.margin = "20px 20px"
    let contentListContact = document.createTextNode(info[i]);
    list.appendChild(contentListContact);
    listContent.appendChild(list);
}

partrightContact.appendChild(listContent);

let social = document.createElement('div');


partrightContact.appendChild(social);

let myAccountsIcons = [
    "fa-brands fa-github" , 
    "fa-brands fa-facebook" , 
    "fa-brands fa-stack-overflow" , 
    "fa-brands fa-whatsapp" , 
    "fa-brands fa-telegram" , 
    "fa-brands fa-instagram"
];

let myAccountsName = [
    "github" , 
    "facebook" , 
    "stack-overflow" , 
    "whatsapp" , 
    "telegram" , 
    "instagram"
];

let myAccountsLinks = [
    "https://github.com/ziadAhmedFawzy" , 
    "https://www.facebook.com/zizo.king.129357" , 
    "stack-overflow" , 
    "https://wa.me/201121530044?text=" , 
    "telegram" , 
    "instagram"
];

function Accounts(icon , nameAccount , link) {
    let iconShape = document.createElement('i');
    iconShape.classList = icon;

    iconShape.style.margin = "10px"
    iconShape.style.marginLeft = "20px"

    let name = document.createElement('h6');

    name.style.display = "flex";
    name.style.flexFlow = "row wrap";
    name.style.fontSize = "20px";

    name.appendChild(iconShape)

    let linkAccount = document.createElement('a');
    linkAccount.target = "_blank"
    linkAccount.style.textDecoration = "none";
    linkAccount.style.color = "#6f00f1";

    linkAccount.href = link;
    let contentName = document.createTextNode(nameAccount);
    linkAccount.appendChild(contentName);
    name.appendChild(linkAccount);

    social.appendChild(name)
}

for(let i = 0; i < myAccountsLinks.length; i++)
{
    Accounts(myAccountsIcons[i] , myAccountsName[i] , myAccountsLinks[i]);
}

// partLeftContact

let form = document.createElement('form');

form.style.marginTop = "20px"

let sectionEmail = document.createElement('div');

let labelforEmail = document.createElement('label');

labelforEmail.style.display = "block";

let labelEmail = document.createTextNode('email');

labelforEmail.appendChild(labelEmail)

sectionEmail.appendChild(labelforEmail)

let inputEmail = document.createElement('input');

inputEmail.type = "email";
inputEmail.placeholder = "email";

sectionEmail.appendChild(inputEmail);



let sectionText = document.createElement('div');

let labelfortext = document.createElement('label');

labelfortext.style.display = "block";

let labelpass = document.createTextNode('massege');

labelfortext.appendChild(labelpass);

sectionText.appendChild(labelfortext);

let inputtext = document.createElement('input');

inputtext.placeholder = "massege"

inputtext.style.padding = "20px"
inputtext.style.width = "60%"
inputtext.style.border = "#6f00f14f 1px solid"
inputtext.style.borderRadius = "5px"

inputEmail.style.padding = "20px"
inputEmail.style.width = "60%"
inputEmail.style.border = "#6f00f14f 1px solid"
inputEmail.style.borderRadius = "5px"

sectionText.appendChild(labelfortext);
sectionText.appendChild(inputtext);

inputEmail.type = "text";
inputEmail.placeholder = "email";

sectionText.appendChild(inputtext)

let btnSubmit = document.createElement('button');

btnSubmit.style.cssText = `background-color: #68b5ff; border : none; color: #6f00f1; padding : 10px 20px; margin-top: 20px; border-radius : 5px; cursor : pointer;`;

let btnText = document.createTextNode('send Now');

btnSubmit.appendChild(btnText);

form.appendChild(sectionEmail);
form.appendChild(sectionText);
form.appendChild(btnSubmit);

partLeftContact.appendChild(form);