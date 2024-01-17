import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://ivkxyuvi:zTnwLvXBGpEAq2i8kdR0pTaunx926o5V@castor.db.elephantsql.com/ivkxyuvi",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
