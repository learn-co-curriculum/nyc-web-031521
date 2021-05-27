const API = "http://localhost:4000"

// makes fetch happen 
    // Returns - <Promise: [{}] >
function getProjects(){
   return fetch(API + "/projects")
    .then((r) => r.json())
}

function postProjects(formData){
    return fetch(API + "/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((r) => r.json())

}

export {getProjects, postProjects};


// In App.js:

import {getProjects} from '../api/client'