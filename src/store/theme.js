import { create } from 'zustand';
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

// Get saved theme from localStorage or use light as default
const getSavedTheme = () => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
};

// Create a theme store to manage light/dark mode
const useThemeStore = create(
    persist(
        immer((set) => ({
            // Use saved theme or default to light
            theme: getSavedTheme(),
            
            // Toggle between light and dark themes
            toggleTheme: () =>
                set((state) => {
                    state.theme = state.theme === 'light' ? 'dark' : 'light';
                    // Save theme to localStorage
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('theme', state.theme);
                    }
                }),
        })),
        {
            name: 'theme-storage', // name for the localStorage key
            partialize: (state) => ({ theme: state.theme }), // only persist the theme property
        }
    )
);

export default useThemeStore;