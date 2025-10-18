import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useAuthStore } from '../store/useAuthStore';
import LoginLayout from '../layouts/Login';

const Login = () => {
  const { signInWithGoogle, isLoading, error } = useAuthStore();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <LoginLayout>
      <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
        <section className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Sign in to Stampcard</h1>
            <p className="text-slate-400">
              Authenticate using your Google account. Replace this flow with your
              preferred identity provider when ready.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 space-y-6 shadow-lg">
            {error ? (
              <p className="text-sm text-rose-400" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full rounded-lg bg-white text-slate-900 font-semibold py-3 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70 inline-flex items-center justify-center gap-3"
              disabled={isLoading}
            >
              <FcGoogle className="h-5 w-5" aria-hidden="true" />
              {isLoading ? 'Connecting…' : 'Sign in with Google'}
            </button>

            <p className="text-xs text-slate-400 text-center">
              This demo simulates a Google sign-in. Integrate the real flow with
              Firebase Auth, Google Identity Services, or your provider of choice.
            </p>
          </div>

          <p className="text-center text-sm text-slate-400">
            <span>New here?</span>{' '}
            <Link to="/" className="font-medium text-cyan-400 hover:text-cyan-300">
              Back to home
            </Link>
          </p>
        </section>
      </main>
    </LoginLayout>
  );
};

export default Login;
