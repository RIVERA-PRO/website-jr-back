import User from '../models/User.js';
import bcryptjs from "bcryptjs";

const editUser = {
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { banner, cv, password, photo, name, email, profile, seguidores } = req.body;

            // Verificar si el usuario existe
            let user = await User.findById(id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Usuario no encontrado',
                });
            }

            // Actualizar los datos del usuario si se proporcionan
            if (name) {
                user.name = name;
            }
            if (photo) {
                user.photo = photo;
            }
            if (cv) {
                user.cv = cv;
            }
            if (email) {
                user.email = email;
            }
            if (profile) {
                user.profile = profile;
            }
            if (seguidores) {
                user.seguidores = seguidores;
            }
            if (banner) {
                user.banner = banner;
            }

            // Verificar si se proporcionó una nueva contraseña
            if (password) {
                // Aplicar cifrado o hash a la nueva contraseña
                const hashedPassword = await bcryptjs.hash(password, 10);
                user.password = hashedPassword;
            }

            // Guardar los cambios
            await user.save();

            return res.status(200).json({
                success: true,
                message: 'Usuario actualizado exitosamente',
                user: user,
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
};

export default editUser;
