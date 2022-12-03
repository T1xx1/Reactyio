import React, { MouseEventHandler } from 'react';

export function ImgButton({ click = () => {}, src, alt, ...attrs }: { alt: string; click: MouseEventHandler; src: string }) {
   return (
      <button className='imgbutton' onClick={click} {...attrs}>
         <img src={src} alt={alt} />
      </button>
   );
}
