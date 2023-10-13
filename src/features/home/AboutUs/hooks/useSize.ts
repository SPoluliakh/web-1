import { useMedia } from '@/common/hooks';

export const useSize = () => {
  const { isMdUp } = useMedia();
  if (isMdUp) return { width: 480, height: 328 };
  return { width: 328, height: 217 };
};
