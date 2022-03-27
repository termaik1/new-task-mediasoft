import { useMedia } from "react-use";

import { customTheme } from "app/config/theme/theme.config";

export const useMobile = () => {
  const {
    breakpoints: {
      values: { mobile, mobile375 },
    },
  } = customTheme;

  const isMobile = useMedia(`(max-width: ${mobile}px)`);
  const isMobile375 = useMedia(`(max-width: ${mobile375}px)`);

  return { isMobile, isMobile375 };
};
