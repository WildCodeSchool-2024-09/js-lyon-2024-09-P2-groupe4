import { createContext, useContext, useState } from "react";

type IsFavoriteContextType = {
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
};

const IsFavoriteContext = createContext<IsFavoriteContextType | null>(null);

export function IsFavoriteProvider({
  children,
}: { children: React.ReactNode }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <IsFavoriteContext.Provider value={{ isFavorite, setIsFavorite }}>
      {children}
    </IsFavoriteContext.Provider>
  );
}

export const useIsFavorite = () => {
  const value = useContext(IsFavoriteContext);
  if (value === null) {
    throw new Error(
      "useIsFavorite has to be used within a <FavoriteProvider />",
    );
  }
  return value;
};
