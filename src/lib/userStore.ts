import { browser } from "$app/env";
import { writable } from "svelte/store";

export const usr = writable();
export const searchTerm = writable('')


if (browser) {
  usr.set(JSON.parse(localStorage.getItem("usr")) || "");
  usr.subscribe((v) => {
    localStorage.setItem("usr", JSON.stringify(v));
  });
}
