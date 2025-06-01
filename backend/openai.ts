import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const generateRoommateContract = async (preferences) => {
    try {
        const response = await axios.post(OPENAI_API_URL, {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Generate a polite roommate contract based on the following preferences: ${preferences}`
                }
            ],
            max_tokens: 500,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error generating contract:', error);
        throw new Error('Failed to generate contract');
    }
};