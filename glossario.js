// Arquivo: glossario.js
// Contém o glossário bíblico master para acesso direto no navegador.

// O objeto 'glossarioBiblico' será globalmente acessível.
const glossarioBiblico = JSON.parse(`
${open("/home/ubuntu/glossario.json", "r").read()}
`);

// Função auxiliar para buscar a tradução de um termo
function traduzirTermoGlossario(termo, idiomaDestino) {
    const termoNormalizado = termo.trim();
    if (glossarioBiblico[termoNormalizado] && glossarioBiblico[termoNormalizado][idiomaDestino]) {
        return glossarioBiblico[termoNormalizado][idiomaDestino];
    }
    return null;
}

// Mapeamento de termos para evitar que a API de tradução os altere
const termosGlossario = Object.keys(glossarioBiblico);
const regexTermos = new RegExp(`\\b(${termosGlossario.join("|")})\\b`, 'gi');

// Exportar funções e objeto (embora global, é bom para clareza)
// O objeto já é global, mas podemos adicionar um namespace para as funções
window.traduzirTermoGlossario = traduzirTermoGlossario;
window.regexTermos = regexTermos;
window.glossarioBiblico = glossarioBiblico;
window.termosGlossario = termosGlossario;
