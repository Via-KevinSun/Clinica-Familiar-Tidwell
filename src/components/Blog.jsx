import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Blog.css';

const BLOG_IMGS = [
  'https://img1.wsimg.com/isteam/ip/ae6a4dcd-8ecf-4c57-9e45-a37e71b46311/blob-41.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,h:280,cg:true',
  'https://img1.wsimg.com/isteam/ip/ae6a4dcd-8ecf-4c57-9e45-a37e71b46311/blob-41.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,h:280,cg:true',
  'https://img1.wsimg.com/isteam/ip/ae6a4dcd-8ecf-4c57-9e45-a37e71b46311/blob-41.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,h:280,cg:true',
];

export default function Blog() {
  const { t } = useLanguage();
  const { blog } = t;

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog-header">
          <span className="section-tag">{blog.tag}</span>
          <h2>{blog.headline}</h2>
        </div>

        <div className="blog-grid">
          {blog.posts.map((post, i) => (
            <article className="blog-card" key={i}>
              <div className="blog-img">
                <img
                  src={BLOG_IMGS[i]}
                  alt={post.title}
                  loading="lazy"
                  onError={e => { e.target.parentElement.classList.add('img-error'); }}
                />
                <span className="blog-date">{post.date}</span>
              </div>
              <div className="blog-body">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="blog-link" type="button">
                  {blog.readMore}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
