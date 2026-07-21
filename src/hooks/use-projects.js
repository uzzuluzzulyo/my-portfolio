import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

/**
 * useProjects 훅
 *
 * 공개된(is_published=true) projects 테이블 데이터를 sort_order 순으로 가져온다.
 *
 * Example usage:
 * const { projects, loading } = useProjects();
 */
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase
      .from('projects')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data, error: fetchError }) => {
        if (fetchError) {
          setError('프로젝트를 불러오지 못했습니다.');
        } else {
          setProjects(data ?? []);
        }
        setLoading(false);
      });
  }, []);

  return { projects, loading, error };
}
