!function(){var t,e,n,o,a="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",i="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+a;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),o=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(o));var c,s=document.getElementById("myModal"),r=document.getElementById("modal-poster"),d=document.getElementById("modal-title"),l=document.getElementById("modal-vote"),u=document.getElementById("modal-popularity"),g=document.getElementById("modal-original-title"),m=document.getElementById("modal-genre"),p=document.getElementById("modal-overview"),v=document.getElementById("addToWatchedBtn"),f=document.getElementById("addToQueuBtn"),h=document.getElementsByClassName("close")[0];function b(){s.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((function(t){return t.json()})).then((function(t){c=t.genres,x(t)})).catch((function(t){})),fetch(i).then((function(t){return t.json()})).then((function(t){x(t.results)})).catch((function(t){console.error("Error fetching movies:",t)})),h.addEventListener("click",b),window.addEventListener("click",(function(t){t.target===s&&b()}));var y,E=document.getElementById("main"),L=document.getElementById("search-form"),I=document.getElementById("search-input"),S=document.querySelector(".loader-container");function B(t){y=t,E.classList.toggle("is-hidden"),S.classList.toggle("is-hidden"),fetch(t).then((function(t){return t.json()})).then((function(t){console.log(t.results),0!==t.results.length?(x(t.results),currentPage=t.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=t.total_pages,E.classList.toggle("is-hidden"),S.classList.toggle("is-hidden"),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("current").innerText=currentPage})),currentPage<=1||(currentPage,totalPages)):(E.classList.toggle("is-hidden"),S.classList.toggle("is-hidden"),E.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function x(t){E.innerHTML="",t.forEach((function(t){var e=t.title,n=t.poster_path,o=t.release_date,a=t.genre_ids,i=document.createElement("div");i.classList.add("movie");var v=a&&Array.isArray(c)?a.map((function(t){var e=c.find((function(e){return e.id===t}));return e?e.name:""})).join(", "):"";i.innerHTML='\n            <img src="'.concat(n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(e,'"/>\n            \n            <div class="movie-info">\n                <h3>').concat(e.toUpperCase(),'</h3>\n                <div class="movie-details">\n                <div>').concat(v," | ").concat(o.slice(0,4),"</div>\n                </div>\n            </div>        \n                  "),i.addEventListener("click",(function(){!function(t){r.src="https://image.tmdb.org/t/p/w500/".concat(t.poster_path),d.textContent=t.title.toUpperCase(),l.textContent=t.vote_average.toFixed(1)+"   /   "+t.vote_count,u.textContent=t.popularity.toFixed(1),g.textContent=t.original_title.toUpperCase();var e=t.genre_ids.map((function(t){var e=c.find((function(e){return e.id===t}));return e?e.name:""})).join(", ");m.textContent=e,p.textContent=t.overview,s.style.display="block"}(t)})),E.appendChild(i)}))}function C(t){var e=y.split("?"),n=e[1].split("&"),o=n[n.length-1].split("=");if("page"!=o[0]){B(y+"&page="+t)}else{o[1]=t.toString();var a=o.join("=");n[n.length-1]=a;var i=n.join("&");B(e[0]+"?"+i)}}B(i),B(i),L.addEventListener("submit",(function(t){t.preventDefault();var e=I.value;B(e?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+e:i)})),E.addEventListener("click",(function(e){var n=e.target.parentElement;t=n.lastElementChild.firstElementChild.innerText,console.log(t)})),v.addEventListener("click",(function(){o.includes(t)?alert("".concat(t," has been watched already")):o.push(t),localStorage.setItem("movie-watched",JSON.stringify(o))})),f.addEventListener("click",(function(){n.includes(t)?alert("".concat(t," has been added to the queue already")):n.push(t),localStorage.setItem("movie-queue",JSON.stringify(n))})),v.addEventListener("click",(function(){o.includes(e)?alert("".concat(t," has been watched already")):o.push(e),localStorage.setItem("movie-watched",JSON.stringify(o))})),f.addEventListener("click",(function(){n.includes(e)?alert("".concat(t," has been added to the queue already")):n.push(e),localStorage.setItem("movie-queue",JSON.stringify(n))})),document.body.addEventListener("keydown",(function(t){"Escape"===t.code&&b()}));var k=20,w=document.querySelector(".pagination");function N(t){var e="",n=1;t<=3?n=1:t>=19?n=16:(n=t-2)%2==0&&(n-=1),n>1&&(e+='<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>',e+='<button class="pagination-button" type="submit">1</button>',n>2&&(e+='<button class="pagination-button" type="submit">...</button>'));for(var o=n;o<=k&&o<n+5;o++)e+=o===t?'<button class="pagination-button current-page" type="submit">'.concat(o,"</button>"):'<button class="pagination-button" type="submit">'.concat(o,"</button>");n+5<=k&&(n+5<k&&(e+='<button class="pagination-button" type="submit">...</button>'),e+='<button class="pagination-button" type="submit">'.concat(k,"</button>")),t<k&&(e+='<button class="pagination-button next-page" type="submit" id="next">&#11166</button>'),w.innerHTML=e}var _=1;N(_),w.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("pagination-button")&&!e.id){var n=parseInt(e.textContent);isNaN(n)||(N(_=n),C(_))}else e.classList.contains("previous-page")?_>1&&(N(--_),C(_)):e.classList.contains("next-page")&&_<k&&(N(++_),C(_))}))}();
//# sourceMappingURL=library.0b1fcaf6.js.map
