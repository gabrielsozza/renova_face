function updateChristmasCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Define a data do Natal (Mês 11 = Dezembro)
    let christmasDate = new Date(currentYear, 11, 25, 0, 0, 0);

    // Se já passou o Natal deste ano, para tudo zerado (ou muda o ano para o próximo)
    if (now > christmasDate) {
         document.getElementById('days').innerText = "00";
         document.getElementById('hours').innerText = "00";
         document.getElementById('minutes').innerText = "00";
         document.getElementById('seconds').innerText = "00";
         return; 
    }

    const diff = christmasDate - now;

    // Cálculos matemáticos
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60); // Cálculo dos segundos

    // Atualiza o HTML (colocando o zero na frente se for menor que 10)
    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}

// Atualiza a cada 1 segundo (1000 milissegundos)
setInterval(updateChristmasCountdown, 1000);

// Roda uma vez imediatamente para não ficar zerado até o primeiro segundo passar
updateChristmasCountdown();


// --- LÓGICA DO FAQ (ACORDEÃO) ---
const acc = document.getElementsByClassName("faq-question");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Alterna a classe "active" para girar o ícone
    this.classList.toggle("active");

    // Pega o próximo elemento (a resposta)
    const panel = this.nextElementSibling;

    // Se estiver aberto (tem altura máxima), fecha. Se não, abre.
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // scrollHeight pega a altura exata do conteúdo interno
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}