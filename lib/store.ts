import create from 'zustand';
import { createNavBarCandidateSlice, NavBarCandidatesSlice } from '../components/navigation/StateSlice';

export type Store = NavBarCandidatesSlice;
export const useBoundStore = create<Store>()((...a) => ({
    ...createNavBarCandidateSlice(...a),
}))