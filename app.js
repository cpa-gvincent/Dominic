document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('search-btn').addEventListener('click', function(){
  const q = document.getElementById('search-input').value.trim();
  if(!q){ alert('Please enter a search term.'); return; }
  // For demo: filter cards by matching text (client-side only)
  const cards = Array.from(document.querySelectorAll('.card'));
  let found = false;
  cards.forEach(card=>{
    if(card.innerText.toLowerCase().includes(q.toLowerCase())){
      card.style.display = '';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });
  if(!found) alert('No listings found for: ' + q);
});
