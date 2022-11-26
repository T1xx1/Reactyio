import React from 'react';

export function Sign({ user, ...attrs }: { user: string }) {
   return (
      <span id='sign' {...attrs}>
         Built by <a href={`https://github.com/${user}`}>{user}</a>
      </span>
   );
}
