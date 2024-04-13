document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("watched-btn"),t=document.getElementById("queue-btn"),n=document.querySelector(".gallery");let o=JSON.parse(localStorage.getItem("movie-watched")),a=JSON.parse(localStorage.getItem("movie-queue"));async function i(e){n.innerHTML="";for(const t of e)try{if(isNaN(t)||null===t)throw new Error(`Invalid movie ID: ${t}`);{const e=c(await r(t));n.appendChild(e)}}catch(e){"Movie not found."===e.message?console.warn(`Movie with ID ${t} not found.`):console.error("Failed to display movie:",e)}}async function r(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5`,n=await fetch(t);if(!n.ok)throw 404===n.status?new Error("Movie not found."):new Error("Failed to fetch movie details: "+n.statusText);return await n.json()}function c(e){const t=document.createElement("div");return t.classList.add("movie"),t.innerHTML=`\n        <img src="${e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"http://via.placeholder.com/1080x1500"}";\n        <h3>${e.title}</h3>\n    `,t}e.addEventListener("click",(function(e){e.preventDefault(),i(o)})),t.addEventListener("click",(function(e){e.preventDefault(),i(a)}))}));
//# sourceMappingURL=library.9745ddc2.js.map