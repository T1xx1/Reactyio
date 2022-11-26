export function Download(name: string, data: string, extension = 'txt', type = 'plain/text') {
   let a = document.createElement('a');

   a.setAttribute('download', `${name}.${extension}`);
   a.setAttribute('href', `data:${type};charset=utf8,${encodeURIComponent(data)}`);

   document.body.appendChild(a);

   a.click();

   document.body.removeChild(a);
}
