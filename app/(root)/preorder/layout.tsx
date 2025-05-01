import { Suspense } from 'react';
import PreorderContent from './page'; // The component using useSearchParams

export default function PreorderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreorderContent />
    </Suspense>
  );
}
