export default  (state=null,action) => {
    switch(action.type){
        case 'select_course':
            return action.payload;
        default:
            return state;
    }
}