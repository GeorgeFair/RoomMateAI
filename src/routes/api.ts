import express from 'express';
import { generateContract, getContracts } from '../../backend/openai';

const router = express.Router();

// Route to generate a new roommate contract
router.post('/generate', async (req, res) => {
    const { preferences } = req.body;
    try {
        const contract = await generateContract(preferences);
        res.status(200).json({ contract });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate contract' });
    }
});

// Route to retrieve existing contracts
router.get('/contracts', async (req, res) => {
    try {
        const contracts = await getContracts();
        res.status(200).json({ contracts });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve contracts' });
    }
});

export default router;