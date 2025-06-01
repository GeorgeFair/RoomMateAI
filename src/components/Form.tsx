import React, { useState } from 'react';

const Form: React.FC = () => {
    const [preferences, setPreferences] = useState({
        name: '',
        age: '',
        preferences: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPreferences({
            ...preferences,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Call API to generate contract
        try {
            const response = await fetch('/api/generate-contract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(preferences),
            });
            const data = await response.json();
            // Handle the response (e.g., display success message or download PDF)
        } catch (error) {
            console.error('Error generating contract:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={preferences.name} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input type="number" name="age" value={preferences.age} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Preferences:
                    <textarea name="preferences" value={preferences.preferences} onChange={handleChange} required />
                </label>
            </div>
            <button type="submit">Generate Contract</button>
        </form>
    );
};

export default Form;