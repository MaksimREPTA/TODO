async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );

    if (!response.ok) throw new Error();

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export { getUser };
