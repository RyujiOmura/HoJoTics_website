
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
      <img src="/logo.svg" alt="HoJoTics Logo" className="w-48 mb-6" />
      <h1 className="text-3xl font-bold text-center">人と共存・共生する次世代人間型ロボットを開発</h1>
      <p className="text-center text-gray-600 mt-4">“人ができるが、できないこと”を可能にする未来価値の創造</p>
      <a href="mailto:info@hojotics.com" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        お問い合わせ
      </a>
    </main>
  );
}
