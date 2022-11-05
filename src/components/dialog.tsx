import React, { useState } from 'react';

export function Dialog({
   id,
   trigger,
   open,
   title,
   children,
   ...attrs
}: {
   children: JSX.Element;
   id: string;
   open: boolean;
   title: string;
   trigger: JSX.Element;
}) {
   let [o, setOpen] = useState(open);

   let openClose = () => setOpen((old: boolean) => !old);

   return (
      <div id={id} className='dialog' {...attrs}>
         <div className='trigger' onClick={() => openClose()}>
            {trigger}
         </div>
         <dialog open={o}>
            <div className='header'>
               <h1>{title}</h1>
               <img src='https://img.icons8.com/emoji/96/FAB005/cross-mark-emoji.png' alt='Close' onClick={() => openClose()} />
            </div>
            <div className='children'>{children}</div>
         </dialog>
      </div>
   );
}
