# Site: Jéssica & Maiara Advogadas Associadas

Site institucional estático (HTML/CSS/JS puro, sem framework e sem custo de build). Serve para divulgar o escritório, gerar contatos via WhatsApp e construir presença no Google.

## Estrutura
- `index.html`: Home
- `direito-criminal.html`: página principal de SEO ("Advogada Criminalista em São Paulo")
- `direito-civil.html`
- `direito-trabalhista.html`
- `sobre.html`: Jéssica e Maiara
- `contato.html`
- `css/style.css`: todo o visual (cores, tipografia, layout)
- `js/main.js`: menu mobile e botões de WhatsApp
- `assets/`: logo e fotos

## Status atual (2026-09-07)

Concluído:
- Logo recebida e aplicada: `assets/logo.jpg` (arquivo original), `assets/logo-mark.png` (recorte do emblema "J&M", usado no cabeçalho de todas as páginas) e `assets/favicon.png` (mesmo recorte, ícone da aba do navegador).

Pendente, aguardando definição do escritório (sem previsão, sem bloquear o restante do site):
1. **Fotos profissionais de Jéssica e Maiara**: hoje `sobre.html` mostra um retângulo com o texto "Foto profissional da Jéssica/Maiara" no lugar da imagem. Quando as fotos chegarem, substituir esses blocos por `<img>`.
2. **WhatsApp Business**: `js/main.js` tem a linha `var WHATSAPP_NUMBER = '55SEUNUMEROAQUI';`. É a única linha que precisa mudar (todos os botões do site usam essa mesma variável).
3. **Biografia da Maiara** (`sobre.html`): marcada como "em atualização". Trocar pelo texto real quando formação, especialização, experiência e diferencial forem confirmados.
4. **Instagram**: hoje aparece como "em breve" em `contato.html` e no rodapé de todas as páginas.
5. **Perfil da Empresa no Google**: ainda não criado.
6. **Domínio próprio**: ver seção abaixo.

## Domínio: por que `.adv.br` e não `.com.br`

No Brasil, sites de escritórios de advocacia são obrigados pela OAB (Provimento 205/2021 do Conselho Federal) a usar o domínio `.adv.br`, não `.com.br` ou `.com`. A diferença na prática:

- **Registro controlado**: o `.adv.br` só pode ser registrado em registro.br mediante comprovação de inscrição na OAB de quem está registrando (nesse caso, Jéssica e/ou Maiara).
- **Sinaliza credibilidade**: quem pesquisa advogados no Brasil já reconhece `.adv.br` como identificação de que aquele é, de fato, um escritório regularizado.
- **Custo**: registro em torno de R$ 40/ano em registro.br, valor semelhante a um `.com.br` comum.

Sugestões de nome para verificar disponibilidade em registro.br: `jessicaemaiara.adv.br`, `jmadvogadas.adv.br` (o `jm.adv.br` tem boa chance de já estar em uso, por ser muito curto).

Depois de registrar, atualizar as tags `<link rel="canonical">` e o campo `url` do JSON-LD em `index.html` com o domínio definitivo.

## Como visualizar localmente

Basta abrir `index.html` no navegador (duplo clique), ou rodar um servidor simples:

```
cd site-jm-advogadas
python -m http.server 8000
```

E acessar `http://localhost:8000`.

## Como publicar de graça

Qualquer uma destas opções hospeda sites estáticos como este sem custo:

- **Vercel** (vercel.com): arrastar a pasta do projeto ou conectar a um repositório Git.
- **Netlify** (netlify.com): mesmo processo, também com opção de arrastar a pasta.
- **GitHub Pages**: se o projeto for colocado em um repositório GitHub.

Depois de publicar em um domínio gratuito (ex: `jm-advogadas.vercel.app`), o domínio `.adv.br` pode ser apontado para esse mesmo site quando for registrado.

## Sobre a publicidade jurídica

O texto do site foi escrito evitando superlativos ("o melhor", "número 1"), promessas de resultado e comparações com outros escritórios, conforme as regras de publicidade da OAB (Provimento 205/2021). Ao editar textos, manter esse cuidado.
