<script>
  import { usr } from "$lib/userStore";
  import { createEventDispatcher } from "svelte";

  import Input from "./Input.svelte";
  const dispatch = createEventDispatcher();

  let json = {};
  let type = "date";
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    json = Object.fromEntries(formData.entries());
    json["author"] = $usr["username"];
    const res = await fetch("/articles/new.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
    if (res.ok) {
      dispatch("create", await res.json());
    }
  }
</script>

<div class="shadow-md p-2">
  <form on:submit={submit}>
    <input type="text" name="title" placeholder="ชื่อเรื่อง" />
    <input type="text" name="content" placeholder="เนื้อหา" />
    <input type="text" name="description" placeholder="คำอธิบาย" />
    <input type="text" name="tags" placeholder="กลุ่ม" />
    <input type="url" name="url" placeholder="ลิ้ง" />

    <button>Submit</button>
  </form>
</div>
