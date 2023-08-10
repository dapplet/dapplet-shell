import { useTheme } from '../../lib/stores';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themePrefix = 'sl-theme-';
  const themeSuffix = useTheme((state) => state.theme);
  const theme = themePrefix + themeSuffix;

  return <main className={theme}>{children}</main>;
}
