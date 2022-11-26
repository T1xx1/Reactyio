import React from 'react';

export function Info({ k, children, ...attrs }: { k: string; children: any }) {
   return (
      <div id='info' {...attrs}>
         <span>{k}</span>
         <span>{children}</span>
      </div>
   );
}
