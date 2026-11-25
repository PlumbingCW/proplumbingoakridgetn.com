(function(){
  var d=document,root=d.documentElement;
  root.classList.remove('no-js');
  var drawer=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),tog=d.getElementById('mob-toggle'),cl=d.getElementById('mob-close');
  function setMenu(open){
    if(!drawer)return;
    drawer.classList.toggle('open',open);ov.classList.toggle('open',open);
    tog.setAttribute('aria-expanded',open?'true':'false');
    root.style.overflow=open?'hidden':'';
    if(open&&cl)cl.focus();else if(tog)tog.focus();
  }
  if(tog){tog.addEventListener('click',function(){setMenu(!drawer.classList.contains('open'));});}
  if(cl){cl.addEventListener('click',function(){setMenu(false);});}
  if(ov){ov.addEventListener('click',function(){setMenu(false);});}
  d.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer&&drawer.classList.contains('open'))setMenu(false);});
  window.addEventListener('resize',function(){if(window.innerWidth>768&&drawer&&drawer.classList.contains('open'))setMenu(false);});
  var qs=d.querySelectorAll('.faq-q');
  for(var i=0;i<qs.length;i++){
    qs[i].addEventListener('click',function(){
      var it=this.parentNode.parentNode,a=it.querySelector('.faq-a'),open=it.classList.contains('open');
      var all=d.querySelectorAll('.faq-item.open');
      for(var j=0;j<all.length;j++){all[j].classList.remove('open');all[j].querySelector('.faq-a').style.maxHeight='0px';all[j].querySelector('.faq-q').setAttribute('aria-expanded','false');}
      if(!open){it.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';this.setAttribute('aria-expanded','true');}
    });
  }
})();
