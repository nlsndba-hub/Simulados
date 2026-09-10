// ============================================================
// APP.JS - Página inicial
// ============================================================

(function() {
    const lista = document.getElementById('listaMaterias');
    
    if (!lista || !window.CATALOGO_MATERIAS) return;

    window.CATALOGO_MATERIAS.forEach(function(materia) {
        const card = document.createElement('a');
        card.className = 'materia-card';
        card.href = `materia.html?m=${materia.id}`;
        card.innerHTML = `
            <div class="icone">${materia.icone}</div>
            <div class="info">
                <h3>${materia.nome}</h3>
                <p>${materia.descricao}</p>
            </div>
            <div class="seta">→</div>
        `;
        lista.appendChild(card);
    });
})();