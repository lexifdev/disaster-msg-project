import MessagesList from "@/components/MessagesList";
import fetchMessages from "./actions";
import Nav from "@/components/Nav";
export default async function Home() {
  const data = await fetchMessages(1);

  return (
    <div className=" pb-4 pl-4 pr-4 h-screen">
      <header className="sticky top-0 z-50 flex justify-between p-4 bg-white/95 shadow">
        <h1 className="text-3xl font-bold  text-black">재난 메시지</h1>
        <Nav />
      </header>
      <main className="p-4 relative">
        <section>
          <MessagesList initialMessages={data} />
        </section>
      </main>
    </div>
  );
}
