import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookDemo: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 h-full">
          
          {/* Info Panel */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 text-brand-600 font-semibold mb-6">
                <CalendarIcon size={20} />
                <span>Book a Demo</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">See FinFlow in action</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Schedule a 30-minute product walkthrough with one of our financial experts. We'll show you how to:
              </p>
              <ul className="space-y-4 mb-8">
                {['Automate expense tracking', 'Generate investor-ready reports', 'Claim R&D tax credits', 'Integrate your tech stack'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                      <Clock size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Calendar Widget */}
          <div className="lg:col-span-8">
            <Card className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
              {/* Date Picker */}
              <motion.div 
                className="flex-1 p-8 border-r border-slate-100"
                animate={{ width: selectedDate ? 'auto' : '100%' }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">October 2024</h3>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"><ChevronLeft size={20} /></button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"><ChevronRight size={20} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                   {/* Empty days padding */}
                   {[...Array(2)].map((_, i) => <div key={`empty-${i}`} />)}
                   
                   {dates.map(date => (
                     <button 
                      key={date}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }}
                      className={`
                        aspect-square rounded-full flex items-center justify-center text-sm font-semibold transition-all
                        ${selectedDate === date 
                          ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                          : 'text-slate-700 hover:bg-slate-50'}
                      `}
                     >
                       {date}
                     </button>
                   ))}
                </div>
              </motion.div>

              {/* Time Slots - Conditionally Visible */}
              <AnimatePresence>
                {selectedDate && (
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 400, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                    className="bg-slate-50 flex flex-col border-l border-slate-100 overflow-hidden"
                  >
                    <div className="p-6 flex flex-col h-full w-[400px]">
                      <h3 className="text-xs font-bold text-slate-900 mb-6 uppercase tracking-wider">
                        Available Times for Oct {selectedDate}
                      </h3>
                      
                      <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {times.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              w-full py-3 px-4 rounded-lg border text-sm font-semibold transition-all
                              ${selectedTime === time 
                                ? 'bg-brand-600 text-white border-brand-600' 
                                : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'}
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      
                      {selectedTime && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 pt-6 border-t border-slate-200"
                        >
                          <Button className="w-full font-semibold">Confirm Booking</Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};