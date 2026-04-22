export const errorHandler = async(err, _req, res, _next)=>{

    const statusCode = err.statusCode || 500;
    const errorCode = err.code || 'INTERNAL SERVER ERROR';
    const errorMessage =
       statusCode === 500? 'server error': error.message || 'an error occured';
    res.status(statusCode).json({
        success:false,
        error:{
            code:errorCode,
            message:errorMessage
        }
    });
}