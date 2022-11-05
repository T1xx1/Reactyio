import React from 'react';

export function Sign({ username, ...attrs }: { username: string }) {
   return (
      <span className='sign' {...attrs}>
         Built by <a href={`https://github.com/${username}`}>{username}</a>
      </span>
   );
}
