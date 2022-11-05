import React from 'react';
import { createRoot } from 'react-dom/client';

export function Snackbar(message: string) {
   document.querySelectorAll('.snackbar').forEach(s => s.remove());

   createRoot(document.querySelector('dialog[open]') ?? document.body).render(<output className='snackbar'>{message}</output>);

   setTimeout(() => document.querySelector('.snackbar')?.remove(), 5000);
}
