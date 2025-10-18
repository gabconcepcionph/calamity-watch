export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      {children}
    </div>
  );
}