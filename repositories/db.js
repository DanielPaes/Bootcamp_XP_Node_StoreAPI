import Sequelize from "sequelize";

const sequelize = new Sequelize("Endereço BD", {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default sequelize;
