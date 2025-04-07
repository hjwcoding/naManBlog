import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import Profile from "../../components/Profile";
import NotionPage from "../../components/NotionPage";
import { getDatabase } from "../../lib/notionApi";

// 🔹 타입 선언
type NotionPageType = {
  id: string;
  url: string;
  properties: {
    이름: {
      title: { text: { content: string } }[];
    };
    생성일: {
      date: { start: string };
    };
  };
};

export default function Home() {
  const [data, setData] = useState<NotionPageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const response = await getDatabase();
        if (Array.isArray(response.results)) {
          setData(response.results);
        }
      } catch (error) {
        console.error("Failed to fetch Notion data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotionData();
  }, []);

  return (
    <>
      <Header />
      <Profile />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <NotionPage data={data} />
      )}
      <PostList />
      <Footer />
    </>
  );
}
