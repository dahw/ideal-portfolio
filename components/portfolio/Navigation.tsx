import React from 'react';

import {Menu} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';

export default function Navigation({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  const navItems = [
    {id: 'home', label: 'Home'},
    {id: 'summary', label: 'Summary'},
    {id: 'skills', label: 'Skills'},
    {id: 'education', label: 'Education'},
    {id: 'experience', label: 'Experience'},
    {id: 'leadership', label: 'Leadership'},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1d29]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            DAW
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[#4a90e2]'
                    : 'text-gray-400 hover:text-[#d4b896]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-gray-400" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#252837] border-gray-800">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`text-left text-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-[#4a90e2]'
                        : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
