!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire7a9c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7a9c=a),a.register("8OLSw",(function(e,t){var n,a,o,i,l="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",s="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+l,d="https://image.tmdb.org/t/p/w500";o=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(o)),i=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(i));var c=document.getElementById("myModal"),r=document.getElementById("modal-poster"),u=document.getElementById("modal-title"),g=document.getElementById("modal-vote"),m=document.getElementById("modal-popularity"),p=document.getElementById("modal-original-title"),v=document.getElementById("modal-genre"),f=document.getElementById("modal-overview"),h=document.getElementById("addToWatchedBtn"),y=document.getElementById("addToQueuBtn");function E(){c.style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",E),window.addEventListener("click",(function(e){e.target===c&&E()}));var b=document.getElementById("main"),L=document.getElementById("search-form"),x=document.getElementById("search-input"),w=(document.getElementById("gallery"),document.querySelector(".loader-container"));function I(e){lastUrl=e,b.classList.toggle("is-hidden"),w.classList.toggle("is-hidden"),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),0!==e.results.length?(!function(e){b.innerHTML="",e.forEach((function(e){var t=e.title,o=e.poster_path,i=e.release_date,l=e.genre_ids,s=document.createElement("div");s.classList.add("movie"),s.innerHTML='\n            <img src="'.concat(o?d+o:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(t,'"/>\n            \n            <div class="movie-info">\n                <h3>').concat(t.toUpperCase(),'</h3>\n                <div class="movie-details">\n                    <span id="genre" class="').concat(l,'">').concat(l,'</span> |\n                    <span id="release_date" class="').concat(i,'">').concat(i.slice(0,4),"</span>\n                </div>\n            </div>        \n        "),s.addEventListener("click",(function(){!function(e){r.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),u.textContent=e.title.toUpperCase(),g.textContent=e.vote_average.toFixed(1)+"   /   "+e.vote_count,m.textContent=e.popularity.toFixed(1),p.textContent=e.original_title.toUpperCase(),v.textContent=e.genre,f.textContent=e.overview,c.style.display="block",r.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),u.textContent=e.title,g.textContent=e.vote_average+"/"+e.vote_count,m.textContent=e.popularity,p.textContent=e.original_title,v.textContent=e.genre_ids,f.textContent=e.overview,c.style.display="block",a=e.id,n=e.original_title}(e)})),b.appendChild(s)}))}(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,b.classList.toggle("is-hidden"),w.classList.toggle("is-hidden"),current.innerText=currentPage,currentPage<=1?(prev.classList.add("disabled"),next.classList.remove("disabled")):currentPage>=totalPages?(prev.classList.remove("disabled"),next.classList.add("disabled")):(prev.classList.remove("disabled"),next.classList.remove("disabled"))):(b.classList.toggle("is-hidden"),w.classList.toggle("is-hidden"),b.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function S(e){var t=lastUrl.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){I(lastUrl+"&page="+e)}else{a[1]=e.toString();var o=a.join("=");n[n.length-1]=o;var i=n.join("&");I(t[0]+"?"+i)}}I(s),L.addEventListener("submit",(function(e){e.preventDefault();var t=x.value;I(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:s)})),prev.addEventListener("click",(function(){prevPage>0&&S(prevPage)})),next.addEventListener("click",(function(){nextPage<=totalPages&&S(nextPage)})),b.addEventListener("click",(function(e){var t=e.target.parentElement;n=t.lastElementChild.firstElementChild.innerText,console.log(n)})),h.addEventListener("click",(function(){i.includes(n)?alert("".concat(n," has been watched already")):i.push(n),localStorage.setItem("movie-watched",JSON.stringify(i))})),y.addEventListener("click",(function(){o.includes(n)?alert("".concat(n," has been added to the queue already")):o.push(n),localStorage.setItem("movie-queue",JSON.stringify(o))})),h.addEventListener("click",(function(){i.includes(a)?alert("".concat(n," has been watched already")):i.push(a),localStorage.setItem("movie-watched",JSON.stringify(i))})),y.addEventListener("click",(function(){o.includes(a)?alert("".concat(n," has been added to the queue already")):o.push(a),localStorage.setItem("movie-queue",JSON.stringify(o))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&E()}))})),a("8OLSw")}();
//# sourceMappingURL=index.37877200.js.map
