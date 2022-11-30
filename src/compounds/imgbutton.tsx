import React, { lazy, MouseEventHandler } from 'react';

export function ImgButton({ click = () => {}, src, alt, ...attrs }: { alt: string; click: MouseEventHandler; src: string }) {
   let img: any = lazy(() => import(src));

   return (
      <button className='imgbutton' onClick={click} {...attrs}>
         <img src={img} alt={alt} />
      </button>
   );
}
