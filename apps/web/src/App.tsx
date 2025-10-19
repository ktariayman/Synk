import { Button } from '@/components/ui/button';
import { ThemeToggle } from './components/ui/ThemeToggle';

export default function App() {
  return (
    <div className='grid min-h-screen place-items-center'>
      <ThemeToggle />
      <Button className='shadow-md'>ShadCN is ready 🎉</Button>
    </div>
  );
}
