exports.validate = (email) => {
    const simpleEmailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return simpleEmailRegex.test(email);
};