import React from 'react';

export function ImgButton({ onClick, src, alt, ...attrs }: { alt: string; onClick: Function; src: string }) {
   return (
      <button className='imgbutton' onClick={onClick()} {...attrs}>
         <img src={src} alt={alt} />
      </button>
   );
}
