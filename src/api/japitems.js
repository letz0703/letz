export async function getJapitems() {
  return fetch(`${process.env.API_URL}/japitems`).then(res => res.json())
}
