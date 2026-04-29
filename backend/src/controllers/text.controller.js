const textService = require('../services/text.service');

function validateRequest(req, res, next) {
  const { text } = req.body;
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Texto inválido. Informe um texto para processar.' });
  }
  next();
}

async function summarizeText(req, res, next) {
  try {
    const { text } = req.body;
    const result = textService.summarize(text);
    await textService.recordAction('summarize');
    res.json({ result });
  } catch (error) {
    next(error);
  }
}

async function correctText(req, res, next) {
  try {
    const { text } = req.body;
    const result = textService.correct(text);
    await textService.recordAction('correct');
    res.json({ result });
  } catch (error) {
    next(error);
  }
}

async function formalText(req, res, next) {
  try {
    const { text } = req.body;
    const result = textService.formal(text);
    await textService.recordAction('formal');
    res.json({ result });
  } catch (error) {
    next(error);
  }
}

async function simpleText(req, res, next) {
  try {
    const { text } = req.body;
    const result = textService.simple(text);
    await textService.recordAction('simple');
    res.json({ result });
  } catch (error) {
    next(error);
  }
}

async function whatsappText(req, res, next) {
  try {
    const { text } = req.body;
    const result = textService.whatsapp(text);
    await textService.recordAction('whatsapp');
    res.json({ result });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  validateRequest,
  summarizeText,
  correctText,
  formalText,
  simpleText,
  whatsappText,
};
