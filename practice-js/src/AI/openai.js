import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "343434",
  dangerouslyAllowBrowser: true // Note: In production, you should use a backend proxy
});

export const analyzeStartupIdea = async (idea) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert startup advisor and market analyst. Analyze startup ideas and provide detailed insights including:
          - Market size and growth potential
          - Competitor analysis
          - Required initial investment
          - Key challenges and opportunities
          - Revenue projections
          - Technical requirements
          Format the response with appropriate emojis and clear sections.`
        },
        {
          role: "user",
          content: idea
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
};

export const getFollowUpAnalysis = async (conversation) => {
  try {
    const messages = [
      {
        role: "system",
        content: `You are an expert startup advisor and market analyst. Provide detailed follow-up analysis based on the conversation context.
        Focus on actionable insights and specific recommendations.`
      },
      ...conversation.map(msg => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text
      }))
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
}; 