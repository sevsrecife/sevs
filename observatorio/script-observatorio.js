document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidade de filtro dinâmico para os botões de painéis
    const searchInput = document.getElementById('filterPaineis');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const term = this.value.toLowerCase();
            const groups = document.querySelectorAll('.panel-group');
            
            groups.forEach(group => {
                const buttons = group.querySelectorAll('.btn-panel');
                let hasVisibleButton = false;
                
                buttons.forEach(btn => {
                    const text = btn.textContent.toLowerCase();
                    if (text.includes(term)) {
                        // Restaura o display mantendo as classes do bootstrap aplicadas
                        btn.classList.remove('d-none');
                        hasVisibleButton = true;
                    } else {
                        btn.classList.add('d-none');
                    }
                });
                
                // Oculta o grupo inteiro (box de categoria) se não houver botão correspondente
                if (hasVisibleButton) {
                    group.classList.remove('d-none');
                } else {
                    group.classList.add('d-none');
                }
            });
        });
    }

    // Efeito de encolhimento da Navbar no scroll para refinamento de UI
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.paddingTop = '0.3rem';
            navbar.style.paddingBottom = '0.3rem';
            navbar.classList.add('shadow');
        } else {
            navbar.style.paddingTop = '0.8rem';
            navbar.style.paddingBottom = '0.8rem';
            navbar.classList.remove('shadow');
        }
    });
});