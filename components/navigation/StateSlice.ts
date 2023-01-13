
import { StateCreator } from 'zustand'
import { Store } from '../../lib/store'

export interface NavBarCandidatesSlice {
    tabSelected: number
    switchTab: (newTab: number) => void
}

export const createNavBarCandidateSlice: StateCreator<Store, [], [], NavBarCandidatesSlice> = (set) => ({
    tabSelected: 0,
    switchTab: (newTab) => set(() => ({ tabSelected: newTab })),
})


