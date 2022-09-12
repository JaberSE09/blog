import articleContent from "./article-content";
import ArticleList from "../components/ArticlesList";
const ArticleListPage = () => (
    <div>
    <h1>Articles</h1>
   <ArticleList articles={articleContent} />
    </div>
);

export default ArticleListPage;