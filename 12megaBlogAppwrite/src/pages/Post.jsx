import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appWriteService from "../appwrite/Config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  console.log("slug = ", slug);

  useEffect(() => {
    if (slug) {
      appWriteService.getPost(slug).then((post) => {
        console.log("POST FROM APPWRITE:", post);
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appWriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appWriteService.deleteFile(post.featuredImg);
        navigate("/");
      }
    });
  };

  console.log(post);
  console.log("FEATURED IMG:", post?.featuredImg);

  if (post?.featuredImg) {
    console.log("Preview URL:", appWriteService.getFileView(post.featuredImg));
  }

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          {post?.featuredImg && (
            <img
              src={appWriteService.getFileView(post.featuredImg)}
              alt={post.title}
              className="rounded-xl"
            />
          )}

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button classname="mr-3 bg-green-500">Edit</Button>
              </Link>
              <Button classname="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}

export default Post;
