const e="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&include_adult=false&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5";let t,n,i;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),i=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(i));const s=document.getElementById("myModal"),o=document.getElementById("modal-poster"),a=document.getElementById("modal-title"),d=document.getElementById("modal-vote"),l=document.getElementById("modal-popularity"),c=document.getElementById("modal-original-title"),r=document.getElementById("modal-genre"),u=document.getElementById("modal-overview"),m=document.getElementById("addToWatchedBtn"),g=document.getElementById("addToQueuBtn"),p=document.getElementsByClassName("close")[0];let b;function v(){s.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((e=>e.json())).then((e=>{b=e.genres,N(e)})).catch((e=>{})),p.addEventListener("click",v),window.addEventListener("click",(function(e){e.target===s&&v()}));const h=document.getElementById("main"),y=document.getElementById("search-form"),f=document.getElementById("search-input"),E=document.querySelector(".loader-container");let L,I,S,B,k=1;const x=document.getElementById("prev"),w=document.getElementById("next");function C(e){L=e,h.classList.toggle("is-hidden"),E.classList.toggle("is-hidden"),fetch(e).then((e=>e.json())).then((e=>{console.log(e.results),0!==e.results.length?(N(e.results),k=e.page,I=k+1,S=k-1,B=e.total_pages,h.classList.toggle("is-hidden"),E.classList.toggle("is-hidden"),function(){k<=1?(x&&x.classList.add("disabled"),w&&w.classList.remove("disabled")):k>=B?(x&&x.classList.remove("disabled"),w&&w.classList.add("disabled")):(x&&x.classList.remove("disabled"),w&&w.classList.remove("disabled"));x.addEventListener("click",(()=>{S>0&&_(S)})),w.addEventListener("click",(()=>{I<=B&&_(I)}))}()):(h.classList.toggle("is-hidden"),E.classList.toggle("is-hidden"),h.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function N(e){h.innerHTML="",e.forEach((e=>{const{title:t,poster_path:n,release_date:i,genre_ids:m}=e,g=document.createElement("div");g.classList.add("movie");const p=m&&Array.isArray(b)?m.map((e=>{const t=b.find((t=>t.id===e));return t?t.name:""})).join(", "):"";g.innerHTML=`\n            <img src="${n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500"}"\n                alt="${t}"/>\n            \n            <div class="movie-info">\n                <h3>${t.toUpperCase()}</h3>\n                <div class="movie-details">\n                <div>${p} | ${i.slice(0,4)}</div>\n                </div>\n            </div>        \n                  `,g.addEventListener("click",(function(){!function(e){o.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,a.textContent=e.title.toUpperCase(),d.textContent=e.vote_average.toFixed(1)+"   /   "+e.vote_count,l.textContent=e.popularity.toFixed(1),c.textContent=e.original_title.toUpperCase();const t=e.genre_ids.map((e=>{const t=b.find((t=>t.id===e));return t?t.name:""})).join(", ");r.textContent=t,u.textContent=e.overview,s.style.display="block"}(e)})),h.appendChild(g)}))}function _(e){let t=L.split("?"),n=t[1].split("&"),i=n[n.length-1].split("=");if("page"!=i[0]){C(L+"&page="+e)}else{i[1]=e.toString();let s=i.join("=");n[n.length-1]=s;let o=n.join("&");C(t[0]+"?"+o)}}C(e),C(e),y.addEventListener("submit",(t=>{t.preventDefault();const n=f.value;C(n?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+n:e)})),h.addEventListener("click",(e=>{let n=e.target.parentElement;t=n.lastElementChild.firstElementChild.innerText,console.log(t)})),m.addEventListener("click",(()=>{i.includes(t)?alert(`${t} has been watched already`):i.push(t),localStorage.setItem("movie-watched",JSON.stringify(i))})),g.addEventListener("click",(()=>{n.includes(t)?alert(`${t} has been added to the queue already`):n.push(t),localStorage.setItem("movie-queue",JSON.stringify(n))})),m.addEventListener("click",(()=>{i.includes(undefined)?alert(`${t} has been watched already`):i.push(undefined),localStorage.setItem("movie-watched",JSON.stringify(i))})),g.addEventListener("click",(()=>{n.includes(undefined)?alert(`${t} has been added to the queue already`):n.push(undefined),localStorage.setItem("movie-queue",JSON.stringify(n))})),document.body.addEventListener("keydown",(e=>{"Escape"===e.code&&v()}));const $=document.querySelector(".pagination");function q(e){let t="";let n=1;e<=3?n=1:e>=19?n=16:(n=e-2,n%2==0&&(n-=1)),n>1&&(t+='<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>',t+='<button class="pagination-button" type="submit">1</button>',n>2&&(t+='<button class="pagination-button" type="submit">...</button>'));for(let i=n;i<=20&&i<n+5;i++)t+=i===e?`<button class="pagination-button current-page" type="submit">${i}</button>`:`<button class="pagination-button" type="submit">${i}</button>`;n+5<=20&&(n+5<20&&(t+='<button class="pagination-button" type="submit">...</button>'),t+='<button class="pagination-button" type="submit">20</button>'),e<20&&(t+='<button class="pagination-button next-page" type="submit" id="next">&#11166</button>'),$.innerHTML=t}let J=1;q(J),$.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("pagination-button")&&!t.id){const e=parseInt(t.textContent);isNaN(e)||(J=e,q(J),_(J))}else t.classList.contains("previous-page")?J>1&&(J--,q(J),_(J)):t.classList.contains("next-page")&&J<20&&(J++,q(J),_(J))}));
//# sourceMappingURL=library.a87a3df1.js.map
