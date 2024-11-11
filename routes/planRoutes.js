 // routes/planRoutes.js
const express = require('express');
const { createPlan, getPlans, updatePlan, deletePlan } = require('../controllers/planController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPlan);
router.get('/', authMiddleware, getPlans);
router.put('/:id', authMiddleware, updatePlan);
router.delete('/:id', authMiddleware, deletePlan);

module.exports = router;

