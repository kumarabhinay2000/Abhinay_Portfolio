import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';

const HomePage = lazy(() => import('../pages/homePage'));
const WorkPage = lazy(() => import('../pages/workPage'));
const ProjectDetailPage = lazy(() => import('../pages/projectDetailPage'));
const AboutPage = lazy(() => import('../pages/aboutPage'));
const ExperiencePage = lazy(() => import('../pages/experiencePage'));
const BlogPage = lazy(() => import('../pages/blogPage'));
const ArticlePage = lazy(() => import('../pages/articlePage'));
const ContactPage = lazy(() => import('../pages/contactPage'));
const NotFoundPage = lazy(() => import('../pages/notFoundPage'));

function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-muted)',
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
    }}>
      —
    </div>
  );
}

function wrap(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: wrap(HomePage) },
      { path: 'work', element: wrap(WorkPage) },
      { path: 'work/:projectSlug', element: wrap(ProjectDetailPage) },
      { path: 'about', element: wrap(AboutPage) },
      { path: 'experience', element: wrap(ExperiencePage) },
      { path: 'blog', element: wrap(BlogPage) },
      { path: 'blog/:slug', element: wrap(ArticlePage) },
      { path: 'contact', element: wrap(ContactPage) },
      { path: '*', element: wrap(NotFoundPage) },
    ],
  },
]);
