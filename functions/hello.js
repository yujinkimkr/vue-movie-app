exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'HEROPY',
            age: 84,
            email: 'thesecon@gmail.com'
        })
    }
}