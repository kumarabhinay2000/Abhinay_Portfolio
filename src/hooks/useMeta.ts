import { useEffect } from 'react';

export function useMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;

      let og = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (og) og.content = title;

      let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = description;
    }

    return () => {
      document.title = 'Abhinay — Software Engineer';
    };
  }, [title, description]);
}
