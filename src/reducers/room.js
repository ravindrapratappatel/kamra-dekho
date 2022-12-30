import { ROOM_REQUEST, ROOM_REQUEST_FAIL, ROOM_REQUEST_SUCCESS} from "../actions/type";
const initialState = {
  loading : true,
  room : []
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ROOM_REQUEST :
    return {...state, loading: true}  
    case ROOM_REQUEST_SUCCESS:
    return {...state, room : payload, loading: false};
    case ROOM_REQUEST_FAIL:
      return {...state, loading: false }
    default:
      return state;
  }
}