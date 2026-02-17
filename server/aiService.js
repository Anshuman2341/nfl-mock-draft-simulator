import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function getAIPick(team, players) {
  const prompt = `
You are an NFL General Manager.

Team needs: ${team.needs.join(", ")}

Available players:
${players.map(p =>
  `- ${p.name} (${p.position}, rank ${p.rank},grade ${p.grade},)`
).join("\n")}

Pick the best player for this team.
Return ONLY the player name.
No explanation.
`;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are an NFL draft expert." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    });

    return response.choices[0].message.content.trim();

  } catch (err) {
    console.error("Groq AI Error:", err.response?.data || err.message);
    return null;
  }
}
