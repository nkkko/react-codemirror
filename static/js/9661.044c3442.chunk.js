"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9661],{59661:(t,n,e)=>{e.r(n),e.d(n,{default:()=>s});const s="type storage is int\ntype parameter is\n  Increment of int\n| Decrement of int\n| Reset\ntype return is list (operation) * storage\n// Two entrypoints\nfunction add (const store : storage; const delta : int) : storage is\n  store + delta\nfunction sub (const store : storage; const delta : int) : storage is\n  store - delta\n(* Main access point that dispatches to the entrypoints according to\n   the smart contract parameter. *)\nfunction main (const action : parameter; const store : storage) : return is\n ((nil : list (operation)),    // No operations\n  case action of\n    Increment (n) -> add (store, n)\n  | Decrement (n) -> sub (store, n)\n  | Reset         -> 0\n  end)\n"}}]);
//# sourceMappingURL=9661.044c3442.chunk.js.map