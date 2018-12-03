import React from "react";
import Footer from '../components/footer'
import Layout from '../pages/layout'
import Head from '../components/social'

import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
    <Head title={post.frontmatter.title} description={post.excerpt}/>
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
