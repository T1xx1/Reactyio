import React from 'react';

export function Info({ k, children, ...attrs }: { k: string; children: any }) {
   return (
      <div className='info' {...attrs}>
         <span>{k}</span>
         <span>{children}</span>
      </div>
   );
}
