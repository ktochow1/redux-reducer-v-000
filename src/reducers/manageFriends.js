export function manageFriends(state={friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND': {
            return {
                ...state,
                friends: [
                    ...state.friends,
                    {hometown: action.friend.hometown,
                    id: action.friend.id,
                    name: action.friend.name}
                ]
            }
        }
        case 'REMOVE_FRIEND': {
            let friendRemoval = state.friends.findIndex(friend => friend.id === action.id)
            return {
               ...state,
               friends: [
                   ...state.friends.slice(0, friendRemoval),
                   ...state.friends.slice(friendRemoval+1)
               ]
            }
        }
        
            default: return state    
            }
    }

