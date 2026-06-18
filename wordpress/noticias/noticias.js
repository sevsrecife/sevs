// script.js
const NOTICIAS = [
    {
        titulo: "CIEVS Recife emite alerta para elevação de casos de Dengue na SE 20",
        resumo: "O Centro de Informações Estratégicas em Vigilância em Saúde (CIEVS Recife) acompanha a intensificação da transmissão da Dengue e orienta a rede de saúde sobre os protocolos de manejo clínico.",
        categoria: "Alerta",
        icone: "bi-exclamation-triangle-fill",
        data: "21/05/2026",
        link: "#"
    },
    {
        titulo: "Recife intensifica vigilância de SRAG para o período do inverno 2026",
        resumo: "Com a chegada do inverno, o CIEVS reforça as ações de vigilância sentinela para Síndrome Respiratória Aguda Grave (SRAG) em parceria com as unidades de saúde do município.",
        categoria: "Vigilância",
        icone: "bi-lungs-fill",
        data: "15/05/2026",
        link: "#"
    },
    {
        titulo: "Plenária CIEVS de julho terá foco em Arboviroses e Protocolos de Manejo",
        resumo: "O encontro quinzenal de julho abordará o cenário epidemiológico atual das arboviroses no Recife e apresentará os protocolos atualizados para manejo clínico na atenção básica.",
        categoria: "Institucional",
        icone: "bi-people-fill",
        data: "10/05/2026",
        link: "#"
    },
    {
        titulo: "Campanha de vacinação contra Influenza alcança 80% da meta em Recife",
        resumo: "A campanha de vacinação contra a Influenza 2026 superou os 80% da meta estabelecida pelo Ministério da Saúde. A vacinação continua disponível em todas as USFs do município.",
        categoria: "Prevenção",
        icone: "bi-shield-fill-check",
        data: "05/05/2026",
        link: "#"
    },
    {
        titulo: "Novo protocolo de notificação imediata é publicado pelo CIEVS",
        resumo: "O CIEVS Recife publicou atualização do fluxo de Notificação Compulsória Imediata, alinhando os procedimentos municipais às diretrizes da Portaria GM/MS Nº 5.201/2024.",
        categoria: "Institucional",
        icone: "bi-file-earmark-text-fill",
        data: "28/04/2026",
        link: "#"
    },
    {
        titulo: "Testagem para Hepatites Virais é ampliada nas USFs do Recife",
        resumo: "Em alusão ao Dia Mundial da Hepatite, o município amplia a oferta de testagem rápida para Hepatites B e C em todas as unidades de saúde da família, sem necessidade de agendamento.",
        categoria: "Prevenção",
        icone: "bi-heart-pulse-fill",
        data: "20/04/2026",
        link: "#"
    },
    {
        titulo: "Alerta: elevação de casos de Sífilis Congênita no 1º quadrimestre de 2026",
        resumo: "O monitoramento epidemiológico do CIEVS identificou aumento no número de casos de Sífilis Congênita no primeiro quadrimestre de 2026. A rede é orientada a intensificar o rastreamento no pré-natal.",
        categoria: "Alerta",
        icone: "bi-exclamation-circle-fill",
        data: "10/04/2026",
        link: "#"
    },
    {
        titulo: "CIEVS Recife participa de exercício simulado de resposta a surto",
        resumo: "Equipes do CIEVS Recife participaram de exercício nacional de simulação de resposta a surto de doença de causa desconhecida, coordenado pelo Ministério da Saúde e PAHO.",
        categoria: "Institucional",
        icone: "bi-activity",
        data: "02/04/2026",
        link: "#"
    },
    {
        titulo: "Vigilância ambiental reforça monitoramento de ovitrampas no verão",
        resumo: "O programa de monitoramento de ovitrampas do Aedes aegypti foi intensificado em bairros com maior histórico de transmissão de Dengue, com análise semanal dos resultados pelo CIEVS.",
        categoria: "Vigilância",
        icone: "bi-geo-alt-fill",
        data: "24/03/2026",
        link: "#"
    },
];

const BADGE_CLASSES = {
    "Alerta":       "badge-alerta",
    "Vigilância":   "badge-vigilancia",
    "Institucional":"badge-institucional",
    "Prevenção":    "badge-prevencao",
};

function categorias() {
    return ["Todas", ...new Set(NOTICIAS.map(n => n.categoria))];
}

function criarFiltroCategorias(categoriaAtiva) {
    const container = document.getElementById("filtro-categorias");
    container.innerHTML = "";

    categorias().forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "btn-categoria" + (cat === categoriaAtiva ? " ativo" : "");
        btn.textContent = cat;
        btn.setAttribute("aria-pressed", cat === categoriaAtiva);
        btn.addEventListener("click", () => renderizar(cat));
        container.appendChild(btn);
    });
}

function criarCardNoticia(noticia) {
    const badgeClass = BADGE_CLASSES[noticia.categoria] || "badge-institucional";
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
        <div class="card noticia-card shadow-sm h-100">
            <div class="noticia-img-placeholder">
                <i class="bi ${noticia.icone}"></i>
            </div>
            <div class="card-body p-4 d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="badge-categoria ${badgeClass}">${noticia.categoria}</span>
                    <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>${noticia.data}</small>
                </div>
                <h5 class="noticia-titulo mb-2">${noticia.titulo}</h5>
                <p class="noticia-resumo mb-3 flex-grow-1">${noticia.resumo}</p>
                <a href="${noticia.link}" class="btn-ler-mais d-inline-flex align-items-center gap-1">
                    Ler mais <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    return col;
}

function renderizar(categoriaAtiva) {
    criarFiltroCategorias(categoriaAtiva);

    const lista    = document.getElementById("lista-noticias");
    const vazio    = document.getElementById("estado-vazio");
    const contador = document.getElementById("resultado-contador");
    lista.innerHTML = "";

    const filtradas = categoriaAtiva === "Todas"
        ? [...NOTICIAS]
        : NOTICIAS.filter(n => n.categoria === categoriaAtiva);

    if (filtradas.length === 0) {
        lista.classList.add("d-none");
        vazio.classList.remove("d-none");
        contador.textContent = "0 notícias";
        return;
    }

    lista.classList.remove("d-none");
    vazio.classList.add("d-none");
    contador.textContent = `${filtradas.length} notícia${filtradas.length > 1 ? "s" : ""}`;

    filtradas.forEach(n => lista.appendChild(criarCardNoticia(n)));
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    } catch (e) {
        console.warn('VLibras não pôde ser carregado.', e);
    }
    renderizar("Todas");
});