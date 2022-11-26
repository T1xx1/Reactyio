let _f = {
   d: (k: string) => localStorage.removeItem(k),
   r: (k: string): object => JSON.parse(localStorage.getItem(k) ?? 'null'),
   w: (k: string, obj: object | null) => localStorage.setItem(k, JSON.stringify(obj)),
};

export class LocalStorage {
   initial: object;

   id: string;

   value: object | null = null;

   constructor(name: string, version = 0, initial = {}, ...functions: Function[]) {
      this.initial = initial;

      let id = (v = version) => `${name} ${v}`;

      this.id = id(version);

      this.read();

      const upgrade = (v: number, cb: (state: object) => {}) => {
         if (v > version) return;

         let k = id(v);

         if (k in localStorage) {
            let r = cb(_f.r(k));

            if (v < version) _f.d(k);

            this.write(r);
         }
      };

      for (let f of functions) f(upgrade);

      this.write();
   }

   del() {
      _f.d(this.id);
   }
   read() {
      this.value = _f.r(this.id);
   }
   write(obj = this.value) {
      this.value = this.value ?? this.initial;

      _f.w(this.id, obj);
   }
}
