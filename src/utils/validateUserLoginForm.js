export const validateUserLoginForm = (values) => {
    const errors = {};
    if (values.username.length < 6 || values.username.length > 15) {
        errors.username = 'Must be at between 6 to 15 characters.';
    } 
    if (values.password.length < 8 ) {
        errors.password = 'Must be 8 characters or more.';
    }
    return errors;
}