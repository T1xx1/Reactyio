export function Download(name: string, data: string, type: 'plain/text', encoding = 'utf-8') {
   let a = document.createElement('a');

   a.setAttribute('download', name);
   a.setAttribute('href', `data:${type};charset=${encoding},${encodeURIComponent(data)}`);

   document.body.appendChild(a);

   a.click();

   document.body.removeChild(a);
}
