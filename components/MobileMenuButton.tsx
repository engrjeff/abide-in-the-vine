import { Bars3Icon } from "@heroicons/react/24/outline";

interface MobileMenuButtonProps {
  onToggle: () => void;
  isOpen: boolean;
}

const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => {
  return (
    <div className='block md:hidden'>
      <button className='p-2 rounded-full hover:bg-white/10' onClick={onToggle}>
        <span className='sr-only'>{isOpen ? "close" : "open"} menu</span>
        <Bars3Icon className='w-5 h-5' />
      </button>
    </div>
  );
};

export default MobileMenuButton;
