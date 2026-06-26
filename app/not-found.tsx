import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <h2 className="mt-3 text-2xl font-semibold text-slate-800">Page not found</h2>
      <p className="mt-2 text-slate-600">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
        Back to Home
      </Link>
    </main>
  );
}
