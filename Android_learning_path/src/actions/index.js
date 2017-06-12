export const selectCourse = (id) => {
    return({
        type:'select_course',
        payload:id
    });
};