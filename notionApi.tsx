const NOTION_API_KEY = "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"; // 생성한 Integration Token 입력
const DATABASE_ID = "1bf91c268252803e87ccf6495066097f"; // 데이터베이스 ID 입력

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
