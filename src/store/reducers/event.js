let id = 0;

const intialState = [

];

function event(state, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        id: id,
        title: action.payload.name,
      };

    case "DELETE_EVENT":
      console.log(state, "DELETE STATE");
      return state.filter((event) => {
        console.log(event, "EVENT");
        return event.id !== action.payload.id;
      });

    case "UPDATE_EVENT":
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, { title: action.payload.title });
    // yeni gelecek olan değer için obje oluşturulur
    // var olanı kopyalanır
    // kullanıcıdan gelen değer alınır

    // Home !
    case "ADD_EVENT_HOME":
      return {
        id: id,
        name: action.payload.name,
        desc: action.payload.desc,
        place: action.payload.place,
        kont: action.payload.kont,
        date: action.payload.date,
      };

    default:
      return state;
  }
}

// Bize actiondan dönen payload dönüyor. ekleme işlemi yapıyor
function eventReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_EVENT":
      id = id + 1;
      return [...state, event(undefined, action)];

    case "DELETE_EVENT":
      return event(state, action);
      case "LOGIN_USER":
        return {
          
          ...state,
          loginUser: action.payload
        };

    case "UPDATE_EVENT":
      return state.map((data) => event(data, action));
    default:
      return state;

    case "ADD_EVENT_HOME":
      id = id + 1;
      console.log(action.payload, "PAYLOAD");
      return [...state, event(null, action)];
  }
}

export default eventReducer;
