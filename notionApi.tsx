import dotenv from "dotenv";
dotenv.config();

const NOTION_API_KEY = process.env.NOTION_API_KEY as string;
const DATABASE_ID = process.env.DATABASE_ID as string;

async function getDatabase() {
  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  console.log(JSON.stringify(data));
}

getDatabase();
