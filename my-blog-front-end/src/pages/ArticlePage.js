import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddCommentForm from '../components/AddCommentForm';
import CommentList from '../components/CommentList';
import UpvoteList from '../components/UpvoteList';
const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvote: 0, comment: []})
    const {name} = useParams();
    useEffect(() =>{
        const fetchData = async () =>{
            const result = await fetch(`/api/articles/${name}`)
            const body =await result.json()
            setArticleInfo(body)
        }
        fetchData()

    }, [name])
    
    return(
        
    <div>
       <UpvoteList articleName={name} setArticleInfo={setArticleInfo} upvotes={articleInfo.upvote} />
    <CommentList comment={articleInfo.comment} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    </div>
    )
    }


export default ArticlePage;