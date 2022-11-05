import React from 'react';

function recursive(obj: any) {
   if (obj === '') obj = "''";

   return typeof obj === 'object' ? (
      obj instanceof Array ? (
         <>
            <span>{'['}</span>
            <ul>
               {obj.map(v => (
                  <>
                     {recursive(v)}
                     <br />
                  </>
               ))}
            </ul>
            <span>{']'}</span>
         </>
      ) : (
         <>
            <span>{'{'}</span>
            <ul>
               {Object.keys(obj).map(key => (
                  <div key={key}>
                     <b>{key} : </b>
                     <>{recursive(obj[key])}</>
                  </div>
               ))}
            </ul>
            <span>{'}'}</span>
         </>
      )
   ) : (
      <span className={typeof obj}>{String(obj)}</span>
   );
}

export function JsonToHTML(obj: any) {
   return <code className='jsontohtml'>{recursive(obj)}</code>;
}
