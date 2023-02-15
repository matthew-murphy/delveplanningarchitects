import React, { useState, useEffect } from "react";
import axios from "axios";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";

// Material Kit 2 PRO React components
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // api call to get posts from wordpress
  const getPosts = async () => {
    setLoading(true);
    const res = await axios.get("https://ibpblogger.com/wp-json/wp/v1/posts");
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  // remove any shortcodes from the content
  const formatBlogContent = (content) => {
    if (!content) return "";
    // remove shortcodes and html tags
    const regex = /(\[.*?\])|(<[^>]+>)/g;
    return content.replace(regex, "");
    // remove shortcodes
    // const regex = /\[.*?\]/g;
    // remove html tags
    // const regex = /<[^>]+>/g;
  };
  
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {currentPosts?.map((post) => (
            <Grid item xs={12} md={6} lg={4}>
              <MKBox mt={3}>
                <DefaultBlogCard
                  image={post?.feature_image}
                  title={post?.title}
                  description={formatBlogContent(post?.content).substring(0, 200) + "..."}
                  categories={["Business", "Capability", "Management"]}
                  action={
                    {
                      type: "external",
                      route: "https://ibpblogger.com/" + post?.slug,
                      color: "info",
                      label: "Read More",
                    }
                  }
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
        <MKBox mt={5}>
          <MKPagination>
            <MKPagination item
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
            >
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            {pageNumbers.map((number) => (
              <MKPagination item active={number === currentPage} onClick={() => paginate(number)}>
                {number}
              </MKPagination>
            ))}
            <MKPagination item 
              onClick={() => {
                if (currentPage < pageNumbers.length) {
                  paginate(currentPage + 1);
                }
              }}
            >
              <Icon>keyboard_arrow_right</Icon>
              </MKPagination>
          </MKPagination>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default BlogSection;