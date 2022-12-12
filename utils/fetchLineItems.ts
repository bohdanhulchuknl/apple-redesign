export const fetchLineItems = async (session_id: string) => {
  const res = await fetch(`
    ${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?session_id=${session_id}
 `);
  if (!res.ok) return;
  console.log("LOL")
  const data = await res.json();
  const products = data.session.data;
  return products
};
