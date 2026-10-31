import "dotenv/config";
import mongoose from "mongoose";
import Creator from "../models/Creator.js";

const niches = ["Student", "Travel", "Developer", "Fitness", "AI", "Marketing"];
const rows = [];
let i = 0;
for (const n of niches) {
  for (let k = 1; k <= 6; k++) {
    i++;
    const handle = `${n.toLowerCase()}.creator${k}`;
    const followers = 12000 + ((i * 7919) % 900) * 1000;
    const dm = i % 5 === 0;
    rows.push({
      handle,
      platform: "TikTok",
      niche: n,
      followers,
      engagement: 3 + ((i * 13) % 25),
      medianViews: Math.round(followers * (0.02 + ((i * 17) % 30) / 100)),
      contact: dm ? "DM only" : "Email",
      email: dm ? undefined : `${handle}@example.com`,
      bio: `${n} content creator`,
    });
  }
}

await mongoose.connect(process.env.MONGO_URI);
await Creator.deleteMany();
await Creator.insertMany(rows);
console.log(`Seeded ${rows.length} creators`);
process.exit(0);
