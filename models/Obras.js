import Sequelize from 'sequelize';
import db from '../config/db.js';
export const Obra = db.define('obras_realizadas',{
	titulo:{
		type:Sequelize.STRING
	},
	fecha_ejecucion:{
                type:Sequelize
.STRING
        },
	imagen:{
                type:Sequelize
.STRING
        },
	descripcion:{
                type:Sequelize
.STRING
	},
	slug:{
                type:Sequelize
.STRING
        },
});
