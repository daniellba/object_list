'use strict';

/*// Nested Object Destructuring in JavaScript
const object = {

        id:  1 ,
        name:  "google" ,
        url:  "www.google.co.il",
        subdata: ''
}

const { object: id, name, url, subdata } = object
console.log(object)

//console.log(object.subdata)
document.getElementById("objPrint").innerHTML = JSON.stringify(object, null, 2);
document.getElementById("subdata").innerHTML = JSON.stringify(subdata, null, 2);
*/




var objectArr = new Array(50);
var i = 1, object = {};
function addObjManually(_name, _subdata)
{
    object = {

        id: i,
        name: _name,
        url: "www." + _name + ".co.il",
        subdata: _subdata
    }
    objectArr[i - 1] = object;
    i++;
}

var nameVar = "google", subdataVar = "subData{";
addObjManually(nameVar, subdataVar)

var nameVar = "walla", subdataVar = '';
addObjManually(nameVar, subdataVar)

var nameVar = "ynet", subdataVar = "subData{";
addObjManually(nameVar, subdataVar)

var nameVar = "mako", subdataVar = '';
addObjManually(nameVar, subdataVar)

console.log(objectArr)
document.getElementById("objGoogle").innerHTML = JSON.stringify(objectArr[0], null, 2);
document.getElementById("objWalla").innerHTML = JSON.stringify(objectArr[1], null, 2);
document.getElementById("objYnet").innerHTML = JSON.stringify(objectArr[2], null, 2);
document.getElementById("objMako").innerHTML = JSON.stringify(objectArr[3], null, 2);



/*var objectArr = new Array(50), object = {}, i = 0;
function addObjEle(_name, _subdata)
{
    for (i; i < objectArr.length; i++)
    {
        object =
        {
            id: i,
            name: _name,
            url: "www." + _name + ".co.il",
            subdata: _subdata
        }
        objectArr[objectArr.length] = object;
    }
}
var nameVar = "google", subdataVar = '';
addObjEle(nameVar, subdataVar)

const { objectArr: id, name, url, subdata } = objectArr
console.log(objectArr[0])
//console.log(object.subdata)

document.getElementById("objPrint").innerHTML = JSON.stringify(object, null, 2);
document.getElementById("subdata").innerHTML = JSON.stringify(subdata, null, 2);*/








/*
//adding it manually o/c its not effective.
let objectListData =
{
    id: '1',
    name: 'google',
    url: 'www.' + name + '.co.il'
};

objectListData[objectListData.length] =
{
    id: '2',
    name: 'walla',
    url: 'www.' + name + '.co.il'
};

document.getElementById("arrPrint").innerHTML = JSON.stringify(objectListData, null, 2);
*/

/*var name = 'google', subData = '';
var url = 'www.' + name + '.co.il';
objectListData[objectListData.length] = url;

const arr2 = new Array(1);
var i = 0;
function objArr(_name)
{ 
    for (i; i < arr2.length; i++) {
        arr2[i] =
        {
            id: i,
            name: name,
            url: 'www.' + name + '.co.il',
            subData: subData
        };
    }
    if (arr2[i].subData != '')
        objArr(subData);
}

//objArr(name);
//objectListData.push(url);
*/


//print data
//JSON.stringify(url).replace(/"/g, "");
//console.log(url.replace(/['"]+/g, ''));

//document.getElementById("urlPrint").innerHTML = url;
//document.getElementById("urlPrint").innerHTML = JSON.stringify(url, null, 2);



/*
Read UserData Form Data.json File
fetch("./objectlist.json")
    .then(function (response) {
        return response;
    })
    .then(function (data) {
        return data.json();
    })
    .then(function (Normal) {
        const html = Normal.map(
            (data) => `<div class="object"> 
        <h4> ${data.id}</h4>
        <h2> ${data.name}</</h2>
        <h3> ${data.url}</h3>
    </div>`
        );
        document.getElementById("app").innerHTML = html;
    })
    .catch(function (err) {
        console.log("Fetch problem show: " + err.message);
    });



// Read Blog Information Form Blog.json File
fetch("./objectlist.json")
    .then(function (response) {
        return response;
    })
    .then(function (data) {
        return data.json();
    })
    .then(function (Normal) {
        const html = Normal.map(
            (data) => `<div class="object"> 
        <h4> ${data.id}</h4>
        <h2> ${data.name}</</h2>
        <h3> ${data.url}</h3>
    </div>`
        );
        document.getElementById("appData").innerHTML = html;
    })
    .catch(function (err) {
        console.log("Fetch problem show: " + err.message);
    });
*/

/*
 * let http = new XMLHttpRequest();
http.open('get', 'objectlist.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";
        for (let item of products) {
            output += `
            <div class="product">
               <p id="id">${item.id}</p>
               <p name="name">${item.name}</p>
               <p url="url">${item.url}</p>
            </div>
         `;
        }
        document.querySelector(".products").innerHTML = output;
    } // closing the if statement.
} */// closing the onload property.