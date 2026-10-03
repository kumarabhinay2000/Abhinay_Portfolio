import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { articles } from '../data/articles';
import SectionHeading from '../components/common/sectionHeading';
import { useMeta } from '../hooks/useMeta';
import styles from './blogPage.module.css';

const categories = ['All', 'Engineering', 'AI', 'Backend', 'Geospatial', '3D', 'DevOps'];

export default function BlogPage() {
  useMeta('Abhinay — Blog', 'Technical writing on backend engineering, AI, geospatial systems, and 3D web.');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? articles.filter((a) => a.published)
      : articles.filter(
          (a) => a.published && a.category === activeCategory
        );

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Writing"
            title="BLOG & ARTICLES"
            description="Technical writing on backend engineering, AI, geospatial systems, and 3D web."
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No articles in this category yet.</p>
          </div>
        ) : (
          <div className={styles.articlesList}>
            {filtered.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className={styles.articleCard}
              >
                <div className={styles.articleMeta}>
                  <span className={styles.articleCategory}>{article.category}</span>
                  <span className={styles.articleDate}>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className={styles.articleTime}>
                    <Clock size={12} />
                    {article.readingTime}
                  </span>
                </div>

                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.articleDesc}>{article.shortDescription}</p>

                <span className={styles.readBtn}>
                  Read Article <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
