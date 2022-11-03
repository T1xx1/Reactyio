import React, { ReactElement } from 'react';

interface Dialog {
   id: string;
   title: string;
   trigger: ReactElement;
   children: ReactElement;
}

export default function Dialog({ id, title, trigger, children }: Dialog) {
   let s = () => document.querySelector(`#${id}.dialog`);

   return (
      <div id={id} className='dialog'>
         <div className='trigger' onClick={() => s()?.showModal()}>
            {trigger}
         </div>
         <dialog>
            <div>
               <h1>{title}</h1>
               <img src='https://img.icons8.com/emoji/96/FAB005/cross-mark-emoji.png' alt='Close' onClick={() => s()?.close()} />
            </div>
            <div>{children}</div>
         </dialog>
      </div>
   );
}
