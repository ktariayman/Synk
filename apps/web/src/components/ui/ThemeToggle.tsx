import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const Icon = theme === 'dark' ? Sun : Moon;
  return (
    <div className='fixed right-4 top-4'>
      <Button
        variant='outline'
        className='gap-2'
        onClick={toggle}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'}`}
      >
        <Icon className='h-4 w-4' />
        {theme}
      </Button>
    </div>
  );
}
