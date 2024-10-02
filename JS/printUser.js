import { getUser } from "./services/getUser.js";

async function printUser() {
  const { success, data } = await getUser();

  if (!success) return;

  const user = document.getElementById("user");
  user.textContent = data.name[0];
  user.classList.add("userBubble");
}

export { printUser };
