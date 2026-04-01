import { GoogleGenerativeAI } from "@google/generative-ai";

// Ideally, this should be in an environment variable
// But for now, I'll provide a placeholder or instructions to add it
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(API_KEY);

export async function convertHtmlToReact(html: string): Promise<string> {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Adapt the following HTML code to a modern React component using Material UI (MUI) components. 
    Ensure it looks seamless with a standard Material UI theme. 
    Do not use any external CSS unless absolutely necessary (prefer MUI's Box, Typography, Button, etc.). 
    The output should be ONLY the JSX content of the component's return statement, wrapped in a single <Box> or <div>. 
    Use common MUI icons if the original HTML has icons.
    Do not include any imports or export statements. Just the JSX.
    
    HTML to adapt:
    \`\`\`html
    ${html}
    \`\`\`
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        // Remove markdown code blocks if any
        return text.replace(/```jsx|```javascript|```html|```/g, "").trim();
    } catch (error) {
        console.error("Error converting HTML to React:", error);
        throw error;
    }
}
