"use strict";
module.exports = (sequelize, DataTypes) => {
  const bootcamp = sequelize.define(
    "bootcamp",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          max: { args: 50, msg: "Name cannot be greater than 50" },
          notEmpty: { mas: "Name cannot be empty" }
        }
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please add a slug" }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please add a description" },
          max: { args: 500, msg: "cannot be greater than 500 words" }
        }
      },
      website: {
        type: DataTypes.STRING,
        validate: {
          isURL: {
            msg: "website address is wrong"
          }
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          isLength: { args: 10, msg: "phone number should be 10 digit only" }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: { msg: "Enter Valid Email" } }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Address is required" } }
      }
    },
    {}
  );
  bootcamp.associate = function(models) {
    // associations can be defined here
  };
  return bootcamp;
};
