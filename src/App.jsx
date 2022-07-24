import React from 'react';
import Apple from './assets/apple2.png';
import {Icon} from '@iconify/react';

function App() {
  return (
    <div className="bg-gradient-to-br from-red-500 to-orange-400 flex justify-center items-center w-full h-screen">
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all">
        <img
          src={Apple}
          className="w-64 md:w-96 bg-gradient-to-br from-orange-300 to-orange-100"
        />
        <div className="bg-white p-5 relative">
          <div className="text-neutral-800 text-base md:text-xl font-semibold">
            An apple
          </div>
          <div className="text-slate-600 text-sm md:text-base">
            by <span className="font-semibold">jiahuiiiii</span> from{' '}
            <span className="font-semibold">MRGA</span>
          </div>
          <div className="font-semibold text-base md:text-xl mt-3 tracking-wider tabular-nums">
            $8787
          </div>
          <div className="flex">
            {Array(5)
              .fill(0)
              .map(() => (
                <div>
                  <Icon
                    icon="ant-design:star-filled"
                    className="text-yellow-300 w-4 h-4 mt-1"
                  />
                </div>
              ))}
            <div className="ml-2 text-sm md:text-base">(87)</div>
          </div>
      <div className="p-2 md:p-3 rounded-md absolute right-3 bottom-3 w-min bg-red-300 hover:animate-bounce transition-all">
      <Icon icon="akar-icons:cart" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 text-zinc-600 text-xs md:text-sm">
        Made with ❤️ by{' '}
        <span className="font-['Iceberg'] font-semibold text-xl tracking-wider">
          MRGA
        </span>
        . All right reserved.
      </div>
    </div>
  );
}

export default App;
