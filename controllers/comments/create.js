import Comment from '../../models/Comment.js'
const controller = {
    create: async (req, res, next) => {
        try {
            req.body.user_id = req.user._id;
            const publicacionId = req.query.id || req.body.publicacion_id; // Intenta obtener el ID de la publicación de la consulta o del cuerpo de la solicitud
            req.body.publicacion_id = publicacionId;

            let comment = await Comment.create(req.body);

            res.status(201).json({
                success: true,
                response: { text: comment.text, _id: comment._id },
            });
        } catch (error) {
            next(error);
        }
    },
};

export default controller