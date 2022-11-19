'use strict';

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



/*
//add many objects 
var objectArr = new Array(50), object = {}, i = 0;
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
//upload JSON file
let http = new XMLHttpRequest();
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
    }
} */