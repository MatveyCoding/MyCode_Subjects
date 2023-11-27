function showParagraphP(P,event)
{
  event.preventDefault();
  let P_On = document.querySelector(P)
 if(P_On.style.display==='none') 
 P_On.style.display = 'block';
 else
 P_On.style.display = 'none';
 
}
