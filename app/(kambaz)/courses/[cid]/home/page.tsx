export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div id="wd-home">
      <h2>Home {cid}</h2>
    </div>
  );
}