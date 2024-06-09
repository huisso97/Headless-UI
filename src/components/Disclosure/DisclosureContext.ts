import React, { createContext, Dispatch } from "react";

enum DisclosureStates {
  Open,
  Closed,
}

interface StateDefinition {
  disclosureState: DisclosureStates;
  buttonRef: React.RefObject<HTMLButtonElement>;
  panelRef: React.RefObject<HTMLDivElement>;
}

enum ActionTypes {
  ToggleDisclosure,
  CloseDisclosure,
}

type Actions =
  | { type: ActionTypes.ToggleDisclosure }
  | { type: ActionTypes.CloseDisclosure };

const DisclosureContext = createContext<{
  state: StateDefinition;
  dispatch: Dispatch<Actions>;
} | null>(null);

const stateReducer = (
  state: StateDefinition,
  action: Actions
): StateDefinition => {
  switch (action.type) {
    case ActionTypes.ToggleDisclosure:
      return {
        ...state,
        disclosureState:
          state.disclosureState === DisclosureStates.Open
            ? DisclosureStates.Closed
            : DisclosureStates.Open,
      };
    case ActionTypes.CloseDisclosure:
      return { ...state, disclosureState: DisclosureStates.Closed };
    default:
      return state;
  }
};

export { ActionTypes, DisclosureContext, DisclosureStates, stateReducer };

export type { Actions, StateDefinition };
