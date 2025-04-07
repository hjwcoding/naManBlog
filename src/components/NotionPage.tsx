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

interface Props {
  data: NotionPageType[];
}

export default function NotionPage({ data }: Props) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Featured Posts</h2>
      <ul>
        {data.map((item) => {
          const title = item.properties.이름.title[0]?.text.content || "제목 없음";
          const date = item.properties.생성일.date.start;
          const url = item.url;

          return (
            <li key={item.id} className="mb-2 flex justify-between items-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {title}
              </a>
              <span className="text-sm text-gray-500">{date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
