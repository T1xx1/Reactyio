import React, { useReducer } from 'react';

import { ImgButton } from '../compounds/imgbutton';

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
   let [o, openClose] = useReducer((old: boolean) => !old, open);

   return (
      <div id={id} className='dialog' {...attrs}>
         <div className='trigger' onClick={() => openClose()}>
            {trigger}
         </div>
         <dialog open={o}>
            <div className='header'>
               <h1>{title}</h1>
               <ImgButton alt='Close' click={() => openClose()} src='https://img.icons8.com/fluency/48/null/delete-sign.png' />
            </div>
            <div className='children'>{children}</div>
         </dialog>
      </div>
   );
}
