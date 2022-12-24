import React from 'react';

export function Snackbar(message: string) {
   document.querySelectorAll('.snackbar').forEach(s => s.remove());

   (document.querySelector('dialog[open]') ?? document.body).innerHTML += <output className='snackbar'>{message}</output>;

   setTimeout(() => document.querySelector('.snackbar')?.remove(), 5000);
}
