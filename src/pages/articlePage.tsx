import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/articles';
import styles from './articlePage.module.css';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = articles.find((a) => a.slug === slug && a.published);

  useEffect(() => {
    if (!article) navigate('/blog', { replace: true });
  }, [article, navigate]);

  if (!article) return null;

  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/blog" className={styles.backBtn}>
          <ArrowLeft size={16} />
          All Articles
        </Link>

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{article.category}</span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.date}>
                <Calendar size={13} />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.time}>
                <Clock size={13} />
                {article.readingTime}
              </span>
            </div>

            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.lead}>{article.shortDescription}</p>
          </header>

          <div className={styles.content}>
            <p className={styles.contentPlaceholder}>
              Full article content coming soon. This article explores {article.title.toLowerCase()}.
            </p>
            <p className={styles.contentText}>
              {article.shortDescription} This is a technical deep-dive into the concepts,
              implementation patterns, and practical considerations involved.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
