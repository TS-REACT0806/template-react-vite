import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/stores/use-theme-store';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const theme = useThemeStore(s => s.theme);
  const actions = useThemeStore(s => ({ setTheme: s.setTheme }));

  const toggleTheme = () => {
    actions.setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-md"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
