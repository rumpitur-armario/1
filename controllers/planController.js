 // controllers/planController.js
const Plan = require('../models/Plan');

exports.createPlan = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const plan = new Plan({ title, description, date, user: req.user.userId });
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ error: 'Error creating plan' });
  }
};

exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ user: req.user.userId });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching plans' });
  }
};

exports.updatePlan = async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(id, { title, description, date }, { new: true });
    res.json(updatedPlan);
  } catch (error) {
    res.status(500).json({ error: 'Error updating plan' });
  }
};

exports.deletePlan = async (req, res) => {
  const { id } = req.params;
  try {
    await Plan.findByIdAndDelete(id);
    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting plan' });
  }
};

