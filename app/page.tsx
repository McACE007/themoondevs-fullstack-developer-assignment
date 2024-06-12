import axios from "axios";
import GeneratePostCard from "./components/GeneratePostCard";
import PostList from "./components/posts/PostList";

const googleSheetAPIURL = "https://sheetdb.io/api/v1/b7tslqs6bhxe4"

export default async function Home() {
  const posts = await axios.get(googleSheetAPIURL)
  return (
    <div className="h-[calc(100vh-56px)] mt-[56px] w-screen bg-white flex items-center justify-center">
      <PostList posts={posts.data} />
    </div>
  );
}
