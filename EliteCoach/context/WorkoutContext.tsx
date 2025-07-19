import React, { createContext, useContext, useState } from "react";

type WorkoutDraftContextType = {
  hasDraft: boolean;
  startDraft: () => void;
  clearDraft: () => void;
};

const WorkoutDraftContext = createContext<WorkoutDraftContextType | undefined>(undefined);

export const WorkoutDraftProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasDraft, setHasDraft] = useState(false);

  const startDraft = () => setHasDraft(true);
  const clearDraft = () => setHasDraft(false);

  return (
    <WorkoutDraftContext.Provider value={{ hasDraft, startDraft, clearDraft }}>
      {children}
    </WorkoutDraftContext.Provider>
  );
};

export const useWorkoutDraft = () => {
  const context = useContext(WorkoutDraftContext);
  if (!context) throw new Error("useWorkoutDraft must be used within a WorkoutDraftProvider");
  return context;
};
