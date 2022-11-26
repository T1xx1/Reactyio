import React, { lazy } from 'react';

export function ImgButton({ onClick, src, alt, ...attrs }: { alt: string; onClick: Function; src: string }) {
   let img: any = lazy(() => import(src));

   return (
      <button className='imgbutton' onClick={onClick()} {...attrs}>
         <img src={img} alt={alt} />
      </button>
   );
}
