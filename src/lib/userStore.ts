import { browser } from "$app/env";
import { writable } from "svelte/store";

export const usr = writable();

if (browser) {
  usr.set(JSON.parse(localStorage.getItem("user")) || "");
  usr.subscribe((v) => {
    localStorage.setItem("user", JSON.stringify(v));
  });
}
