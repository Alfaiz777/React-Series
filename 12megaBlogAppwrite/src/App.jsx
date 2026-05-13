function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-amber-400">
        Hello world!
      </h1>
    </>
  );
}

export default App;
