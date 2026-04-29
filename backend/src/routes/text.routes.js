const express = require('express');
const router = express.Router();
const textController = require('../controllers/text.controller');

router.post('/summarize', textController.validateRequest, textController.summarizeText);
router.post('/correct', textController.validateRequest, textController.correctText);
router.post('/formal', textController.validateRequest, textController.formalText);
router.post('/simple', textController.validateRequest, textController.simpleText);
router.post('/whatsapp', textController.validateRequest, textController.whatsappText);

module.exports = router;
