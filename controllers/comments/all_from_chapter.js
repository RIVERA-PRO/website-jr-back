import Comment from "../../models/Comment.js";



const controller = {

    all_from_chapter: async (req, res, next) => {

        let pagination = {
            page: 1,
            limit: 4,
        };

        if (req.query.page) {
            pagination.page = req.query.page;
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity;
        }

        try {

            let comments = await Comment.find({ chapter_id: req.query.publicacion_id }).select('text user_id publicacion_id createdAt').populate('user_id', 'name photo ')

            if (comments) {
                return res.status(200).json({
                    success: true,
                    comments
                })
            }

        } catch (error) {
            next(error)
        }
    }
}

export default controller


