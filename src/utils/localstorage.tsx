export class LocalStorage {
   name: string;
   version: number;

   id: string;

   initial: object;

   value: object | null;

   constructor(name: string, version = 0, initial = {}, ...functions: Function[]) {
      this.name = name;
      this.version = version;

      this.initial = initial;

      let Id = (v: number) => `${this.name} ${v}`;

      this.id = Id(this.version);

      for (let f of functions)
         f((v: number, cb: Function = () => {}) => {
            try {
               if (!v) throw null;
               if (v > version) throw null;
            } catch {
               return;
            }

            let k = Id(v);

            if (k in localStorage) {
               let state = JSON.parse(localStorage.getItem(k) ?? 'null');

               let retur = cb(state);

               if (retur) state = retur;

               if (v < version) {
                  localStorage.removeItem(k);
                  localStorage.setItem(Id(++v), JSON.stringify(state));
               }
               if (v === version) this.write(state);
            }
         });

      this.value = JSON.parse(localStorage.getItem(this.id) ?? 'null');

      this.write(this.value ?? this.initial);
   }

   del() {
      localStorage.removeItem(this.id);
   }
   write(obj: object | null = this.value) {
      localStorage.setItem(this.id, JSON.stringify(obj));
   }

   reset() {
      this.write(this.initial);
   }
}
