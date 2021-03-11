/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const FROM = createActionName('FROM');
export const TO = createActionName('TO');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addSerachTag = payload => ({ payload, type: ADD_TAG });
export const removeSerachTag = payload => ({ payload, type: REMOVE_TAG });
export const durationFrom = payload => ({ payload, type: FROM });
export const durationTo = payload => ({ payload, type: TO });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        //wypakowanie reszty stanu sprawia ze fitry się sumują
        ...statePart,
        //nadpisuje searchPhrase
        searchPhrase: action.payload,
      };
    case ADD_TAG:
      return {
        //wypakowanie reszty stanu sprawia ze fitry się sumują
        ...statePart,
        //nadpisuje tags tablicą z tym co już w niej jest oraz nowym tagiem
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        //filtruje istniejącą tablice o tag który równa sie dostarczonemu tagowi        
        tags: statePart.tags.filter(tag => tag !== action.payload),
      };
    case FROM:
      return {
        //wypakowanie reszty stanu sprawia ze fitry się sumują
        ...statePart,        
        duration : {
          //wypakowanie istniejących property które nie mają być zmienione ile by ich było
          ...statePart.duration,
          //nadpisanie from dostarczonym argumentem
          from: action.payload,
        },
      };
    case TO:
      return {
        //wypakowanie reszty stanu sprawia ze fitry się sumują
        ...statePart,        
        duration : {
          //wypakowanie istniejących property które nie mają być zmienione ile by ich było
          ...statePart.duration,
          //nadpisanie from dostarczonym argumentem
          to: action.payload,
        },
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
