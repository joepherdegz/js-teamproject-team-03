let e=JSON.parse(localStorage.getItem("movie-watched"))||[],t=JSON.parse(localStorage.getItem("movie-queue"))||[];function n(){const t=document.getElementById("watched-container");t.innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.textContent=e,t.appendChild(n)}))}function o(){const e=document.getElementById("queue-container");e.innerHTML="",t.forEach((t=>{const n=document.createElement("div");n.textContent=t,e.appendChild(n)}))}document.getElementById("lib-buttons").addEventListener("submit",(function(a){a.preventDefault();const d=a.submitter.id,c=document.getElementById("modal-title").textContent;"watched-btn"===d?e.includes(c)?alert(`${c} has been watched already`):(e.push(c),localStorage.setItem("movie-watched",JSON.stringify(e)),n()):"queue-btn"===d&&(t.includes(c)?alert(`${c} has been added to the queue already`):(t.push(c),localStorage.setItem("movie-queue",JSON.stringify(t)),o()))})),document.addEventListener("DOMContentLoaded",(function(){n(),o()}));
//# sourceMappingURL=library.1f2453ac.js.map
