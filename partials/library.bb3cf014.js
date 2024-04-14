const e="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5";let t,n,a;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),a=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(a));const o=document.getElementById("myModal"),i=document.getElementById("modal-poster"),s=document.getElementById("modal-title"),d=document.getElementById("modal-vote"),l=document.getElementById("modal-popularity"),c=document.getElementById("modal-original-title"),r=document.getElementById("modal-genre"),u=document.getElementById("modal-overview"),g=document.getElementById("addToWatchedBtn"),m=document.getElementById("addToQueuBtn"),p=document.getElementsByClassName("close")[0];let h;function v(){o.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((e=>e.json())).then((e=>{h=e.genres,B(e)})).catch((e=>{})),fetch(e).then((e=>e.json())).then((e=>{B(e.results)})).catch((e=>{console.error("Error fetching movies:",e)})),p.addEventListener("click",v),window.addEventListener("click",(function(e){e.target===o&&v()}));const b=document.getElementById("main"),y=document.getElementById("search-form"),f=document.getElementById("search-input"),E=document.querySelector(".loader-container");let L,I=document.getElementById("prev"),S=document.getElementById("next");function x(e){L=e,b.classList.add("is-hidden"),E.classList.remove("is-hidden"),fetch(e).then((e=>e.json())).then((e=>{if(console.log(e.results),0!==e.results.length){B(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,b.classList.remove("is-hidden"),E.classList.add("is-hidden");document.getElementById("current").innerText=currentPage,I&&I.classList.toggle("disabled",currentPage<=1),S&&S.classList.toggle("disabled",currentPage>=totalPages)}else b.classList.toggle("is-hidden"),E.classList.toggle("is-hidden"),b.innerHTML='<h1 class="no-results">No Results Found</h1>'}))}function B(e){b.innerHTML="",e.forEach((e=>{const{title:t,poster_path:n,release_date:a,genre_ids:g}=e,m=document.createElement("div");m.classList.add("movie");const p=g&&Array.isArray(h)?g.map((e=>{const t=h.find((t=>t.id===e));return t?t.name:""})).join(", "):"";m.innerHTML=`\n            <img src="${n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500"}"\n                alt="${t}"/>\n            \n            <div class="movie-info">\n                <h3>${t.toUpperCase()}</h3>\n                <div class="movie-details">\n                <div>${p} | ${a.slice(0,4)}</div>\n                </div>\n            </div>        \n                  `,m.addEventListener("click",(function(){!function(e){i.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,s.textContent=e.title.toUpperCase(),d.textContent=e.vote_average.toFixed(1)+"   /   "+e.vote_count,l.textContent=e.popularity.toFixed(1),c.textContent=e.original_title.toUpperCase();const t=e.genre_ids.map((e=>{const t=h.find((t=>t.id===e));return t?t.name:""})).join(", ");r.textContent=t,u.textContent=e.overview,o.style.display="block"}(e)})),b.appendChild(m)}))}function k(e){let t=L.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){x(L+"&page="+e)}else{a[1]=e.toString();let o=a.join("=");n[n.length-1]=o;let i=n.join("&");x(t[0]+"?"+i)}}I&&I.addEventListener("click",(()=>{prevPage>0&&k(prevPage)})),S&&S.addEventListener("click",(()=>{nextPage<=totalPages&&k(nextPage)})),x(e),x(e),y.addEventListener("submit",(t=>{t.preventDefault();const n=f.value;x(n?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+n:e)})),b.addEventListener("click",(e=>{let n=e.target.parentElement;t=n.lastElementChild.firstElementChild.innerText,console.log(t)})),g.addEventListener("click",(()=>{a.includes(t)?alert(`${t} has been watched already`):a.push(t),localStorage.setItem("movie-watched",JSON.stringify(a))})),m.addEventListener("click",(()=>{n.includes(t)?alert(`${t} has been added to the queue already`):n.push(t),localStorage.setItem("movie-queue",JSON.stringify(n))})),g.addEventListener("click",(()=>{a.includes(undefined)?alert(`${t} has been watched already`):a.push(undefined),localStorage.setItem("movie-watched",JSON.stringify(a))})),m.addEventListener("click",(()=>{n.includes(undefined)?alert(`${t} has been added to the queue already`):n.push(undefined),localStorage.setItem("movie-queue",JSON.stringify(n))})),document.body.addEventListener("keydown",(e=>{"Escape"===e.code&&v()}));const P=document.querySelector(".pagination");function w(e){let t="";let n=1;e<=3?n=1:e>=19?n=16:(n=e-2,n%2==0&&(n-=1)),n>1&&(t+='<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>',t+='<button class="pagination-button" type="submit">1</button>',n>2&&(t+='<button class="pagination-button" type="submit">...</button>'));for(let a=n;a<=20&&a<n+5;a++)t+=a===e?`<button class="pagination-button current-page" type="submit">${a}</button>`:`<button class="pagination-button" type="submit">${a}</button>`;n+5<=20&&(n+5<20&&(t+='<button class="pagination-button" type="submit">...</button>'),t+='<button class="pagination-button" type="submit">20</button>'),e<20&&(t+='<button class="pagination-button next-page" type="submit" id="next">&#11166</button>'),P.innerHTML=t}let C=1;w(C),P.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("pagination-button")&&!t.id){const e=parseInt(t.textContent);isNaN(e)||(C=e,w(C),k(C))}else t.classList.contains("previous-page")?C>1&&(C--,w(C),k(C)):t.classList.contains("next-page")&&C<20&&(C++,w(C),k(C))}));
//# sourceMappingURL=library.bb3cf014.js.map
