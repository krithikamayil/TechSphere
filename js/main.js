(function(){
  const articles = window.TECHSPHERE_ARTICLES || [];
  const card = (a) => `<article class="article-card"><a href="article.html?id=${encodeURIComponent(a.id)}" aria-label="Read ${a.title}"><div class="article-image" style="background-image:url('${a.image}')" role="img" aria-label="${a.alt}"></div></a><div class="article-card-body"><span class="category-label">${a.category}</span><h3><a href="article.html?id=${encodeURIComponent(a.id)}">${a.title}</a></h3><p>${a.deck}</p><div class="card-bottom"><span>${a.read}</span><a href="article.html?id=${encodeURIComponent(a.id)}">Read article ↗</a></div></div></article>`;
  const featured = document.getElementById("featured-article");
  if(featured && articles.length){
    const a=articles[0];
    featured.innerHTML=`<div class="featured-image" style="background-image:url('${a.image}')" role="img" aria-label="${a.alt}"></div><div class="featured-copy"><span class="category-label">${a.category}</span><h3>${a.title}</h3><p>${a.deck}</p><div class="article-meta"><span>${a.date}</span><span>${a.read}</span></div><a class="text-link" style="margin-top:22px" href="article.html?id=${encodeURIComponent(a.id)}">Read the feature <span>→</span></a></div>`;
  }
  const latest=document.getElementById("latest-articles");
  if(latest) latest.innerHTML=articles.slice(1,4).map(card).join("");
  const blog=document.getElementById("blog-articles");
  if(blog){
    const search=document.getElementById("article-search");
    const filters=[...document.querySelectorAll(".filter-chip")];
    const count=document.getElementById("results-count");
    const empty=document.getElementById("empty-state");
    let category=new URLSearchParams(location.search).get("category") || "All";
    if(!filters.some(f=>f.dataset.category===category)) category="All";
    function render(){
      const term=(search.value||"").trim().toLowerCase();
      const filtered=articles.filter(a=>(category==="All"||a.category===category) && (a.title+" "+a.deck+" "+a.category).toLowerCase().includes(term));
      blog.innerHTML=filtered.map(card).join("");
      count.textContent=`${filtered.length} ${filtered.length===1?"article":"articles"}`;
      empty.hidden=filtered.length!==0;
      filters.forEach(f=>f.classList.toggle("active",f.dataset.category===category));
    }
    filters.forEach(f=>f.addEventListener("click",()=>{category=f.dataset.category;render()}));
    search.addEventListener("input",render);
    render();
  }
  const articleRoot=document.getElementById("article-content");
  if(articleRoot){
    const id=new URLSearchParams(location.search).get("id");
    const a=articles.find(item=>item.id===id);
    if(!a){
      articleRoot.innerHTML='<a class="article-back" href="blog.html">← Back to the journal</a><div class="empty-state">This article could not be found. <a href="blog.html">Browse all articles</a>.</div>';
    }else{
      document.title=a.title+" — TechSphere";
      document.querySelector('meta[name="description"]').setAttribute("content",a.deck);
      const sections=a.content.map(([heading,paragraphs])=>`<section><h2>${heading}</h2>${paragraphs.map(p=>`<p>${p}</p>`).join("")}</section>`).join("");
      const refs=a.refs.map(([label,url])=>`<li>${label}. <a href="${url}" target="_blank" rel="noopener noreferrer">View source</a></li>`).join("");
      articleRoot.innerHTML=`<a class="article-back" href="blog.html">← Back to the journal</a><header class="article-header"><span class="category-label">${a.category}</span><h1>${a.title}</h1><p class="article-deck">${a.deck}</p><div class="article-meta"><span>${a.date}</span><span>${a.read}</span><span>TechSphere Editorial</span></div></header><div class="article-cover" style="background-image:url('${a.image}')" role="img" aria-label="${a.alt}"></div><article class="article-body">${sections}<div class="references"><h2>References and further reading</h2><ol>${refs}</ol><p class="form-message">This article is an educational overview. Readers should consult the linked sources for detailed and updated guidance.</p></div><div class="article-end"><span>Thank you for reading.</span><a class="text-link" href="blog.html">Explore more articles →</a></div></article>`;
    }
  }
  const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".main-nav");
  if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation":"Open navigation")});}
  const newsletter=document.getElementById("newsletter-form");
  if(newsletter) newsletter.addEventListener("submit",e=>{e.preventDefault();const msg=document.getElementById("newsletter-message");if(newsletter.reportValidity())msg.textContent="Email format looks valid. Demo only: no subscription was sent or stored.";});
  const contact=document.getElementById("contact-form");
  if(contact) contact.addEventListener("submit",e=>{e.preventDefault();const status=document.getElementById("contact-message-status");if(contact.reportValidity())status.textContent="Your message passed the form checks. It has not been sent; connect a form backend or email service to enable delivery.";});
})();