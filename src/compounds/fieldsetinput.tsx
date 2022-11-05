import React from 'react';

export function FieldsetInput({
   legend,
   type,
   defaultValue,
   placeholder,
   ...attrs
}: {
   defaultValue: string;
   legend: string;
   placeholder: string;
   type: string;
}) {
   return (
      <fieldset className='fieldsetinput' {...attrs}>
         <legend>{legend}</legend>
         <input type={type} defaultValue={defaultValue} placeholder={placeholder} />
      </fieldset>
   );
}
