import Sequelize from "sequelize";

const sequelize = new Sequelize("endereço do BD", {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default sequelize;
