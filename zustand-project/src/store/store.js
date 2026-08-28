import {create} from "zustand";

const initialState = {
    user: {
        id: "user123",
        friends: ["Latife", "Javier", "Darío", "Bryan"],
        profile: {
            name: " Christian Barroso",
            email: "chrisBaRa@example.com",
            address: {
                street: "Calle Totonilco 152",
                city: "CDMX",
                zipCode: "12345",
            },
        },
    },
};

export const useStore = create((set) => ({
    ...initialState,
    updateAdressStreet: (street) =>
        set((state) => ({
            user: {
                ...state.user,
                profile: {
                    ...state.user.profile,
                    address: {
                        ...state.user.profile.address,
                        street: street,
                    },
                },
            },
        })),
}))