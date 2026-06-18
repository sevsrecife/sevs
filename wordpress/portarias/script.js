document.addEventListener('DOMContentLoaded', () => {
    
    // Inicialização do VLibras
    try {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    } catch (e) {
        console.warn('O widget VLibras não pôde ser carregado.', e);
    }

    // Controle de opacidade e tamanho da Navbar ao rolar a página
    const navbar = document.querySelector('.transition-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Funcionalidade de Filtro Dinâmico para a lista de Documentos/Portarias
    const searchInput = document.getElementById('filtroDocumentos');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const term = this.value.toLowerCase();
            const docs = document.querySelectorAll('.doc-item');
            
            docs.forEach(doc => {
                const titulo = doc.querySelector('.doc-titulo').textContent.toLowerCase();
                const desc = doc.querySelector('.doc-desc').textContent.toLowerCase();
                
                if (titulo.includes(term) || desc.includes(term)) {
                    doc.style.display = 'block';
                } else {
                    doc.style.display = 'none';
                }
            });
        });
    }
});