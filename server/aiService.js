import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAIPick(team, players) {
  const prompt = `
You are an NFL General Manager.

Team needs: ${team.needs.join(", ")}

Available players:
${players.map(p =>
  `- ${p.name} (${p.position}, rank ${p.rank})`
).join("\n")}

Pick the best player for this team.
Return ONLY the player name.
No explanation.
`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an NFL draft expert." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    });

    return response.choices[0].message.content.trim();

  } catch (err) {
    console.error("AI Error:", err);
    return null;
  }
}
