import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
    bears: number;
    increase: (by: number) => void;
    bearReset: () => void;
}

const useBearStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                bears: 0,
                increase: (by) => set((state) => ({ bears: state.bears + by })),
                bearReset: () => set({ bears: 0 }),
            }),
            {
                name: 'bear-storage',
            }
        )
    )
);
// const useStore = create<BearState>()(process.env.NODE_ENV !== 'production' ? devtools(useBearStore) : useBearStore);

export default useBearStore;
