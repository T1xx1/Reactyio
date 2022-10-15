export class LocalStorage {
   name: string;
   version: number;

   id: string;

   initial: object;

   value: object | null | undefined;

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

               if (v < version) localStorage.removeItem(k);
               if (v === version) {
                  this.write(state);
               } else localStorage.setItem(Id(++v), JSON.stringify(state));
            }
         });

      this.init();
   }

   del() {
      localStorage.removeItem(this.id);
   }
   read() {
      this.value = JSON.parse(localStorage.getItem(this.id) ?? 'null');
   }
   write(obj: object | null | undefined = this.value) {
      localStorage.setItem(this.id, JSON.stringify(obj));
   }

   init() {
      this.write(this.value ?? this.initial);
   }
   reset() {
      this.value = this.initial;

      this.write();
   }
}
