const { recordUsage } = require('../config/db');

function splitIntoSentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .split(/(?<=[.!?])\s+/);
}

function summarize(text) {
  const sentences = splitIntoSentences(text);
  if (sentences.length <= 2) {
    return text.trim();
  }
  return sentences.slice(0, 2).join(' ').trim();
}

// Futuro: aqui podemos conectar uma API de IA para criar resumos mais inteligentes.
function correct(text) {
  let normalized = text.replace(/\s+/g, ' ').trim();
  normalized = normalized.replace(/\s+([.,!?;:])/g, '$1');
  normalized = normalized.replace(/([.!?])([A-Za-zÀ-ú])/g, '$1 $2');
  normalized = normalized.replace(/\s*\.\.\.+\s*/g, '... ');
  normalized = normalized.replace(/\s*\?\s*/g, '? ');
  normalized = normalized.replace(/\s*!\s*/g, '! ');
  normalized = normalized.replace(/\s*,\s*/g, ', ');

  normalized = normalized
    .split('. ')
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join('. ');

  if (!normalized.endsWith('.') && !normalized.endsWith('!') && !normalized.endsWith('?')) {
    normalized += '.';
  }

  return normalized;
}

function formal(text) {
  const mapping = {
    'vc': 'você',
    'vcs': 'vocês',
    'tá': 'está',
    'tavam': 'estavam',
    'ok': 'certo',
    'beleza': 'combinado',
    'pra': 'para',
    'pq': 'porque',
    'queria': 'gostaria',
    'gente': 'pessoas',
    'cara': 'pessoa',
    'é': 'é',
  };

  let result = text;
  Object.keys(mapping).forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, mapping[key]);
  });

  result = correct(result);
  return result;
}

function simple(text) {
  const mapping = {
    'informações': 'dados',
    'utilizar': 'usar',
    'necessariamente': 'precisa',
    'adicionalmente': 'também',
    'solicitação': 'pedido',
    'atualmente': 'hoje',
    'realizar': 'fazer',
    'possibilidades': 'opções',
    'transformação': 'mudança',
    'complexidade': 'diferença',
  };

  let result = text;
  Object.keys(mapping).forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, mapping[key]);
  });

  result = correct(result);
  return result;
}

function whatsapp(text) {
  const mapping = {
    'gostaria de': 'quero',
    'entrar em contato': 'falar',
    'fazer uma solicitação': 'pedir',
    'por favor': 'por favor',
    'desculpe': 'desculpa',
    'não é necessário': 'não precisa',
    'obrigado': 'valeu',
    'até logo': 'até',
  };

  let result = text;
  Object.keys(mapping).forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, mapping[key]);
  });

  result = result.replace(/\s+/g, ' ').trim();
  result = result.replace(/,\s*$/, '');
  result = result.replace(/\s*\.\s*$/, '');

  result = result
    .split(/\s+/)
    .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');

  if (!result.endsWith('!') && !result.endsWith('.') && !result.endsWith('?')) {
    result += '.';
  }

  return result;
}

async function recordAction(actionType) {
  await recordUsage(actionType);
}

module.exports = {
  summarize,
  correct,
  formal,
  simple,
  whatsapp,
  recordAction,
};
