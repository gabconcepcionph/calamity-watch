export default function Modal({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 sm:px-6">
      <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl">
        <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="px-6 py-5 text-left text-slate-600">{children}</div>

        {footer ? (
          <footer className="flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
            {footer}
          </footer>
        ) : null}
      </div>
    </div>
  );
}
