module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emp2det: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        emp3det: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    return User;
};
