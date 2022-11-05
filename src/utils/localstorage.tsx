let _f = {
   del: (k: string) => localStorage.removeItem(k),
   read: (k: string): object => JSON.parse(localStorage.getItem(k) ?? 'null'),
   write: (k: string, obj: object | null) => localStorage.setItem(k, JSON.stringify(obj)),
};

export class LocalStorage {
   initial: object;

   id: string;

   value: object | null = null;

   constructor(name: string, version = 0, initial = {}, ...functions: Function[]) {
      this.initial = initial;

      let Id = (v = version) => `${name} ${v}`;

      this.id = Id(version);

      this.read();

      const upgrade = (v: number, cb: (state: object) => {}): void => {
         try {
            if (v > version) return;
         } catch {}

         let k = Id(v);

         if (k in localStorage) {
            let r = cb(_f.read(k));

            if (v < version) {
               _f.del(k);
               this.write(r);
            }
            if (v === version) this.write(r);
         }
      };

      for (let f of functions) f(upgrade);

      this.write();
   }

   del() {
      _f.del(this.id);
   }
   read() {
      this.value = _f.read(this.id);
   }
   write(obj = this.value) {
      _f.write(this.id, obj ?? this.initial);
   }

   reset() {
      this.write(this.initial);
   }
}
