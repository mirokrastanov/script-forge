import ClerkTestModule from "@/components/test/ClerkTestModule";

export default function Home() {

  return (
    <div className='flex flex-col w-svw h-svh items-center justify-start gap-2 py-8'>

      <section className='flex w-full justify-center'>
        <h1>Home</h1>
      </section>




      {/* AUTH TESTING */}
      <ClerkTestModule />
    </div>
  );
}
