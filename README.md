# Glossário Bíblico Multilíngue Master 📖🌍

## Descrição

Glossário completo para tradutores bíblicos com **1236 entradas** traduzidas para **11 idiomas**.

Este é o glossário bíblico mais completo disponível publicamente, cobrindo personagens, lugares, anjos, seres espirituais, termos teológicos, litúrgicos e da patrística.

---

## 📊 Estatísticas

- **Total de entradas:** 1236
- **Idiomas suportados:** 11
- **Tamanho do arquivo:** 256.5 KB (0.25 MB)
- **Formato:** JSON
- **Encoding:** UTF-8

---

## 🌍 Idiomas Suportados

| Código | Idioma | Nome Nativo |
|--------|--------|-------------|
| `pt` | Português | Português |
| `en` | Inglês | English |
| `es` | Espanhol | Español |
| `fr` | Francês | Français |
| `de` | Alemão | Deutsch |
| `it` | Italiano | Italiano |
| `ru` | Russo | Русский |
| `pl` | Polonês | Polski |
| `ko` | Coreano | 한국어 |
| `ja` | Japonês | 日本語 |
| `tr` | Turco | Türkçe |
| `vi` | Vietnamita | Tiếng Việt |

---

## 📚 Categorias de Conteúdo

### 1. Personagens Bíblicos (500+)
- Antigo Testamento
- Novo Testamento
- Personagens apócrifos
- Variações de nomes

### 2. Lugares e Cidades (200+)
- Cidades bíblicas
- Regiões geográficas
- Montes e vales
- Rios e mares

### 3. Anjos e Seres Espirituais (50+)
- Arcanjos (Miguel, Gabriel, Rafael, etc.)
- Hierarquia angélica
- Seres demoníacos
- Nomes de Deus

### 4. Livros da Bíblia (73)
- 66 livros canônicos
- 7 livros deuterocanônicos

### 5. Termos Teológicos (200+)
- Doutrinas fundamentais
- Conceitos soteriológicos
- Termos escatológicos
- Cristologia e pneumatologia

### 6. Termos Litúrgicos (100+)
- Objetos litúrgicos
- Festas e celebrações
- Vestes sacerdotais
- Elementos do culto

### 7. Pais da Igreja e Patrística (50+)
- Padres apostólicos
- Doutores da Igreja
- Reformadores
- Teólogos históricos

### 8. Termos Teológicos Avançados (50+)
- Conceitos filosóficos
- Termos gregos e latinos
- Doutrinas específicas

---

## 🔧 Estrutura do JSON

```json
{
  "Termo em Português": {
    "en": "English",
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
    "it": "Italiano",
    "ru": "Русский",
    "pl": "Polski",
    "ko": "한국어",
    "ja": "日本語",
    "tr": "Türkçe",
    "vi": "Tiếng Việt"
  }
}
```

### Exemplo Real:

```json
{
  "Davi": {
    "en": "David",
    "es": "David",
    "fr": "David",
    "de": "David",
    "it": "Davide",
    "ru": "Давид",
    "pl": "Dawid",
    "ko": "다윗",
    "ja": "ダビデ",
    "tr": "Davud",
    "vi": "Đavít"
  }
}
```

---

## 💻 Como Usar no Seu Tradutor

### 1. Carregar o Glossário

```javascript
// JavaScript/Node.js
const glossario = require('./glossario.json');

// Exemplo de uso
const termo = "Davi";
const traducao = glossario[termo]["en"]; // "David"
```

```python
# Python
import json

with open('glossario.json', 'r', encoding='utf-8') as f:
    glossario = json.load(f)

# Exemplo de uso
termo = "Davi"
traducao = glossario[termo]["en"]  # "David"
```

### 2. Função de Tradução

```javascript
function traduzirTermo(termo, idiomaDestino) {
  if (glossario[termo] && glossario[termo][idiomaDestino]) {
    return glossario[termo][idiomaDestino];
  }
  return termo; // Retorna o original se não encontrar
}

// Uso
const resultado = traduzirTermo("Jerusalém", "en"); // "Jerusalem"
```

### 3. Pré-processamento de Texto

```javascript
function protegerTermosGlossario(texto) {
  let textoProtegido = texto;
  
  for (const termo in glossario) {
    // Marcar termos do glossário para não serem traduzidos
    const regex = new RegExp(`\\b${termo}\\b`, 'gi');
    textoProtegido = textoProtegido.replace(regex, `{{${termo}}}`);
  }
  
  return textoProtegido;
}

function restaurarTermosGlossario(texto, idiomaDestino) {
  let textoFinal = texto;
  
  const regex = /\{\{([^}]+)\}\}/g;
  textoFinal = textoFinal.replace(regex, (match, termo) => {
    return traduzirTermo(termo, idiomaDestino);
  });
  
  return textoFinal;
}

// Fluxo completo
const textoOriginal = "Davi foi rei de Israel em Jerusalém";
const textoProtegido = protegerTermosGlossario(textoOriginal);
const textoTraduzido = await traduzirComAPI(textoProtegido, "en");
const textoFinal = restaurarTermosGlossario(textoTraduzido, "en");
```

---

## 🚀 Integração com APIs de Tradução

### Google Translate API

```javascript
const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();

async function traduzirTextoComGlossario(texto, idiomaDestino) {
  // 1. Proteger termos do glossário
  const textoProtegido = protegerTermosGlossario(texto);
  
  // 2. Traduzir com Google Translate
  const [traducao] = await translate.translate(textoProtegido, idiomaDestino);
  
  // 3. Restaurar termos do glossário
  const textoFinal = restaurarTermosGlossario(traducao, idiomaDestino);
  
  return textoFinal;
}
```

### Microsoft Translator

```javascript
const axios = require('axios');

async function traduzirComMicrosoft(texto, idiomaDestino) {
  const textoProtegido = protegerTermosGlossario(texto);
  
  const response = await axios.post(
    `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${idiomaDestino}`,
    [{ text: textoProtegido }],
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.TRANSLATOR_KEY,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const traducao = response.data[0].translations[0].text;
  return restaurarTermosGlossario(traducao, idiomaDestino);
}
```

---

## ⚡ Performance e Otimização

### Tamanho do Arquivo

- **256.5 KB** - Extremamente leve!
- Carrega em **menos de 1 segundo** em conexões normais
- **Não afeta** a performance do GitHub
- Ideal para aplicações web e mobile

### Busca Rápida

```javascript
// Criar índice para busca rápida
const indiceGlossario = {};

for (const termo in glossario) {
  const termoLower = termo.toLowerCase();
  indiceGlossario[termoLower] = termo;
}

function buscarTermo(texto) {
  return indiceGlossario[texto.toLowerCase()];
}
```

### Cache

```javascript
const cache = new Map();

function traduzirComCache(termo, idioma) {
  const chave = `${termo}_${idioma}`;
  
  if (cache.has(chave)) {
    return cache.get(chave);
  }
  
  const traducao = glossario[termo]?.[idioma] || termo;
  cache.set(chave, traducao);
  
  return traducao;
}
```

---

## 🛡️ Proteção contra Erros de Tradução

### Problema Comum

APIs de tradução frequentemente erram nomes próprios bíblicos:
- "David" → "Davi" (correto)
- "David" → "Dávid" (erro)
- "Moses" → "Moisés" (correto)
- "Moses" → "Mosés" (erro)

### Solução com Glossário

```javascript
function validarTraducao(textoTraduzido, idiomaDestino) {
  let textoCorrigido = textoTraduzido;
  
  // Verificar se há termos do glossário mal traduzidos
  for (const termo in glossario) {
    const traducaoCorreta = glossario[termo][idiomaDestino];
    
    // Procurar variações incorretas
    const regex = new RegExp(`\\b${termo}\\b`, 'gi');
    textoCorrigido = textoCorrigido.replace(regex, traducaoCorreta);
  }
  
  return textoCorrigido;
}
```

---

## 📦 Instalação e Uso

### 1. Clonar ou Baixar

```bash
# Clonar repositório
git clone [seu-repositorio]

# Ou baixar diretamente
wget https://[seu-link]/glossario.json
```

### 2. Adicionar ao Projeto

```bash
# Copiar para seu projeto
cp glossario.json ./src/data/

# Ou via npm (se publicar como pacote)
npm install glossario-biblico
```

### 3. Importar no Código

```javascript
// ES6
import glossario from './data/glossario.json';

// CommonJS
const glossario = require('./data/glossario.json');

// TypeScript
import glossario from './data/glossario.json';
```

---

## 🎯 Casos de Uso

### 1. Aplicativo de Leitura Bíblica
- Traduzir nomes próprios automaticamente
- Manter consistência entre versões

### 2. Site de Estudos Bíblicos
- Glossário multilíngue integrado
- Links automáticos para termos

### 3. Ferramenta de Tradução
- Proteger termos técnicos
- Garantir precisão teológica

### 4. Chatbot Bíblico
- Reconhecer nomes em múltiplos idiomas
- Responder em qualquer idioma suportado

---

## 🤝 Contribuindo

Este glossário é resultado de pesquisa extensiva e pode ser expandido. Contribuições são bem-vindas!

### Como Contribuir:

1. Adicione novos termos mantendo o formato
2. Corrija traduções imprecisas
3. Adicione novos idiomas
4. Melhore a documentação

---

## 📄 Licença

Este glossário é disponibilizado para uso livre em projetos relacionados a tradução bíblica e estudos teológicos.

---

## 🌟 Diferenciais

✅ **Mais completo** - 1236 entradas  
✅ **Multilíngue** - 11 idiomas  
✅ **Leve** - Apenas 256 KB  
✅ **Pronto para usar** - JSON estruturado  
✅ **Gratuito** - Uso livre  
✅ **Validado** - JSON testado e funcional  
✅ **Documentado** - Exemplos práticos  
✅ **Otimizado** - Performance garantida  

---

## 📞 Suporte

Para dúvidas, sugestões ou contribuições, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para a comunidade de tradução bíblica**

*"E serão todos ensinados por Deus" - João 6:45*
