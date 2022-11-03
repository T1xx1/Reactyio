import React from 'react';

interface Sign {
   username: string;
}

export default function Sing({ username }: Sign) {
   return (
      <span>
         Built by <a href={`https://github.com/${username}`}>{username}</a>
      </span>
   );
}
