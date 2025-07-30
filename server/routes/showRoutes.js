import express from 'express';
import { requireAuth } from '@clerk/express';

const router = express.Router();

// Get all shows
router.get('/', async (req, res) => {
  try {
    // TODO: Implement show fetching logic
    res.json({ message: 'Shows endpoint - implement show fetching' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get show by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Implement show fetching by ID
    res.json({ message: `Show ${id} endpoint - implement show fetching by ID` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new show (admin only)
router.post('/', requireAuth, async (req, res) => {
  try {
    // TODO: Implement show creation logic
    res.json({ message: 'Show creation endpoint - implement show creation' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update show (admin only)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Implement show update logic
    res.json({ message: `Show ${id} update endpoint - implement show update` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete show (admin only)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Implement show deletion logic
    res.json({ message: `Show ${id} deletion endpoint - implement show deletion` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 