import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  signInWithGoogle: async () => {
    set({ isLoading: true, error: null });
    try {
      // Placeholder auth flow. Replace with real Google sign-in integration.
      await new Promise((resolve) => setTimeout(resolve, 400));
      set({ user: { email: 'demo@googleuser.com', provider: 'google' }, isLoading: false });
    } catch (err) {
      set({ error: err.message || 'Unable to sign in with Google', isLoading: false });
    }
  },
  logout: () => set({ user: null }),
}));
