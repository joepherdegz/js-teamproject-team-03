!function(){var e,t,n,a,o="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",i="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+o;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),a=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(a));var s,c=document.getElementById("myModal"),d=document.getElementById("modal-poster"),r=document.getElementById("modal-title"),l=document.getElementById("modal-vote"),u=document.getElementById("modal-popularity"),g=document.getElementById("modal-original-title"),m=document.getElementById("modal-genre"),p=document.getElementById("modal-overview"),v=document.getElementById("addToWatchedBtn"),f=document.getElementById("addToQueuBtn"),b=document.getElementsByClassName("close")[0];function h(){c.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((function(e){return e.json()})).then((function(e){s=e.genres,C(e)})).catch((function(e){})),fetch(i).then((function(e){return e.json()})).then((function(e){C(e.results)})).catch((function(e){console.error("Error fetching movies:",e)})),b.addEventListener("click",h),window.addEventListener("click",(function(e){e.target===c&&h()}));var y,E=document.getElementById("main"),L=document.getElementById("search-form"),I=document.getElementById("search-input"),S=document.querySelector(".loader-container"),x=document.getElementById("prev"),B=document.getElementById("next");function k(e){y=e,E.classList.toggle("is-hidden"),S.classList.toggle("is-hidden"),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),0!==e.results.length?(C(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,E.classList.toggle("is-hidden"),S.classList.toggle("is-hidden"),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("current").innerText=currentPage})),currentPage<=1?(x&&x.classList.add("disabled"),B&&B.classList.remove("disabled")):currentPage>=totalPages?(x&&x.classList.remove("disabled"),B&&B.classList.add("disabled")):(x&&x.classList.remove("disabled"),B&&B.classList.remove("disabled"))):(E.classList.toggle("is-hidden"),S.classList.toggle("is-hidden"),E.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function C(e){E.innerHTML="",e.forEach((function(e){var t=e.title,n=e.poster_path,a=e.release_date,o=e.genre_ids,i=document.createElement("div");i.classList.add("movie");var v=o&&Array.isArray(s)?o.map((function(e){var t=s.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"";i.innerHTML='\n            <img src="'.concat(n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(t,'"/>\n            \n            <div class="movie-info">\n                <h3>').concat(t.toUpperCase(),'</h3>\n                <div class="movie-details">\n                <div>').concat(v," | ").concat(a.slice(0,4),"</div>\n                </div>\n            </div>        \n                  "),i.addEventListener("click",(function(){!function(e){d.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),r.textContent=e.title.toUpperCase(),l.textContent=e.vote_average.toFixed(1)+"   /   "+e.vote_count,u.textContent=e.popularity.toFixed(1),g.textContent=e.original_title.toUpperCase();var t=e.genre_ids.map((function(e){var t=s.find((function(t){return t.id===e}));return t?t.name:""})).join(", ");m.textContent=t,p.textContent=e.overview,c.style.display="block"}(e)})),E.appendChild(i)}))}function P(e){var t=y.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){k(y+"&page="+e)}else{a[1]=e.toString();var o=a.join("=");n[n.length-1]=o;var i=n.join("&");k(t[0]+"?"+i)}}x&&x.addEventListener("click",(function(){prevPage>0&&P(prevPage)})),B&&B.addEventListener("click",(function(){nextPage<=totalPages&&P(nextPage)})),k(i),k(i),L.addEventListener("submit",(function(e){e.preventDefault();var t=I.value;k(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:i)})),E.addEventListener("click",(function(t){var n=t.target.parentElement;e=n.lastElementChild.firstElementChild.innerText,console.log(e)})),v.addEventListener("click",(function(){a.includes(e)?alert("".concat(e," has been watched already")):a.push(e),localStorage.setItem("movie-watched",JSON.stringify(a))})),f.addEventListener("click",(function(){n.includes(e)?alert("".concat(e," has been added to the queue already")):n.push(e),localStorage.setItem("movie-queue",JSON.stringify(n))})),v.addEventListener("click",(function(){a.includes(t)?alert("".concat(e," has been watched already")):a.push(t),localStorage.setItem("movie-watched",JSON.stringify(a))})),f.addEventListener("click",(function(){n.includes(t)?alert("".concat(e," has been added to the queue already")):n.push(t),localStorage.setItem("movie-queue",JSON.stringify(n))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&h()}));var w=20,N=document.querySelector(".pagination");function _(e){var t="",n=1;e<=3?n=1:e>=19?n=16:(n=e-2)%2==0&&(n-=1),n>1&&(t+='<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>',t+='<button class="pagination-button" type="submit">1</button>',n>2&&(t+='<button class="pagination-button" type="submit">...</button>'));for(var a=n;a<=w&&a<n+5;a++)t+=a===e?'<button class="pagination-button current-page" type="submit">'.concat(a,"</button>"):'<button class="pagination-button" type="submit">'.concat(a,"</button>");n+5<=w&&(n+5<w&&(t+='<button class="pagination-button" type="submit">...</button>'),t+='<button class="pagination-button" type="submit">'.concat(w,"</button>")),e<w&&(t+='<button class="pagination-button next-page" type="submit" id="next">&#11166</button>'),N.innerHTML=t}var O=1;_(O),N.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("pagination-button")&&!t.id){var n=parseInt(t.textContent);isNaN(n)||(_(O=n),P(O))}else t.classList.contains("previous-page")?O>1&&(_(--O),P(O)):t.classList.contains("next-page")&&O<w&&(_(++O),P(O))}))}();
//# sourceMappingURL=library.320501c7.js.map
