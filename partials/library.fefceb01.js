!function(){var e,t,n,a,o="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",i="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+o;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),a=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(a));var s,c=document.getElementById("myModal"),r=document.getElementById("modal-poster"),d=document.getElementById("modal-title"),l=document.getElementById("modal-vote"),u=document.getElementById("modal-popularity"),g=document.getElementById("modal-original-title"),m=document.getElementById("modal-genre"),p=document.getElementById("modal-overview"),v=document.getElementById("addToWatchedBtn"),f=document.getElementById("addToQueuBtn"),b=document.getElementsByClassName("close")[0];function h(){c.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((function(e){return e.json()})).then((function(e){s=e.genres,k(e)})).catch((function(e){})),fetch(i).then((function(e){return e.json()})).then((function(e){k(e.results)})).catch((function(e){console.error("Error fetching movies:",e)})),b.addEventListener("click",h),window.addEventListener("click",(function(e){e.target===c&&h()}));var y,E,L,I=document.getElementById("main"),P=document.getElementById("search-form"),S=document.getElementById("search-input"),x=document.querySelector(".loader-container");function B(e){y=e,I.classList.toggle("is-hidden"),x.classList.toggle("is-hidden"),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),0!==e.results.length?(k(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,I.classList.toggle("is-hidden"),x.classList.toggle("is-hidden"),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("current").innerText=currentPage})),currentPage<=1?(E&&E.classList.add("disabled"),L&&L.classList.remove("disabled")):currentPage>=totalPages?(E&&E.classList.remove("disabled"),L&&L.classList.add("disabled")):(E&&E.classList.remove("disabled"),L&&L.classList.remove("disabled"))):(I.classList.toggle("is-hidden"),x.classList.toggle("is-hidden"),I.innerHTML='<h1 class="no-results">No Results Found</h1>')})),E=document.getElementById("prev"),L=document.getElementById("next"),E&&E.addEventListener("click",(function(){prevPage>0&&C(prevPage)})),L&&L.addEventListener("click",(function(){nextPage<=totalPages&&C(nextPage)}))}function k(e){I.innerHTML="",e.forEach((function(e){var t=e.title,n=e.poster_path,a=e.release_date,o=e.genre_ids,i=document.createElement("div");i.classList.add("movie");var v=o&&Array.isArray(s)?o.map((function(e){var t=s.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"";i.innerHTML='\n            <img src="'.concat(n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(t,'"/>\n            \n            <div class="movie-info">\n                <h3>').concat(t.toUpperCase(),'</h3>\n                <div class="movie-details">\n                <div>').concat(v," | ").concat(a.slice(0,4),"</div>\n                </div>\n            </div>        \n                  "),i.addEventListener("click",(function(){!function(e){r.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),d.textContent=e.title.toUpperCase(),l.textContent=e.vote_average.toFixed(1)+"   /   "+e.vote_count,u.textContent=e.popularity.toFixed(1),g.textContent=e.original_title.toUpperCase();var t=e.genre_ids.map((function(e){var t=s.find((function(t){return t.id===e}));return t?t.name:""})).join(", ");m.textContent=t,p.textContent=e.overview,c.style.display="block"}(e)})),I.appendChild(i)}))}function C(e){var t=y.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){B(y+"&page="+e)}else{a[1]=e.toString();var o=a.join("=");n[n.length-1]=o;var i=n.join("&");B(t[0]+"?"+i)}}B(i),P.addEventListener("submit",(function(e){e.preventDefault();var t=S.value;B(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:i)})),E.addEventListener("click",(function(){prevPage>0&&C(prevPage)})),L.addEventListener("click",(function(){nextPage<=totalPages&&C(nextPage)})),I.addEventListener("click",(function(t){var n=t.target.parentElement;e=n.lastElementChild.firstElementChild.innerText,console.log(e)})),v.addEventListener("click",(function(){a.includes(e)?alert("".concat(e," has been watched already")):a.push(e),localStorage.setItem("movie-watched",JSON.stringify(a))})),f.addEventListener("click",(function(){n.includes(e)?alert("".concat(e," has been added to the queue already")):n.push(e),localStorage.setItem("movie-queue",JSON.stringify(n))})),v.addEventListener("click",(function(){a.includes(t)?alert("".concat(e," has been watched already")):a.push(t),localStorage.setItem("movie-watched",JSON.stringify(a))})),f.addEventListener("click",(function(){n.includes(t)?alert("".concat(e," has been added to the queue already")):n.push(t),localStorage.setItem("movie-queue",JSON.stringify(n))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&h()}));var w=20,N=document.querySelector(".pagination");function _(e){var t="";startPage=e<3?1:e>=18?16:e-2,startPage>1&&(t+='<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>',t+='<button class="pagination-button" type="submit">1</button>',startPage>2&&(t+='<button class="pagination-button" type="submit">...</button>'));for(var n=startPage;n<=w&&n<startPage+5;n++)t+=n===e?'<button class="pagination-button current-page" type="submit">'.concat(n,"</button>"):'<button class="pagination-button" type="submit">'.concat(n,"</button>");startPage+5<=w&&(startPage+5<w&&(t+='<button class="pagination-button" type="submit">...</button>'),t+='<button class="pagination-button" type="submit">'.concat(w,"</button>")),e<w&&(t+='<button class="pagination-button next-page" type="submit" id="next">&#11166</button>'),N.innerHTML=t}var O=1;_(O),N.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("pagination-button")&&!t.id){var n=parseInt(t.textContent);isNaN(n)||(_(O=n),C(O))}else t.classList.contains("previous-page")?O>1&&(_(--O),C(O)):t.classList.contains("next-page")&&O<w&&(_(++O),C(O))}))}();
//# sourceMappingURL=library.fefceb01.js.map
