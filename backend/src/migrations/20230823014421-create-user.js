'use strict';
const defaultValue = '/backend/public/media/image/avatar.png'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
              allowNull: false,
              primaryKey: true,
              type: Sequelize.INTEGER,
              defaultValue: Sequelize.UUIDV4
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            nickName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            id_billingdata: {
                type: Sequelize.STRING,
                allowNull: true,
                references: {
                    model:'Billingdata',
                    key: 'id',
                    onUpdate:"CASCADE",
                    onDelete:"CASCADE"
                }
            },
            id_account: {
                type: Sequelize.STRING,
                allowNull: true,
                references: {
                    model:'Accounts',
                    key: 'id',
                    onUpdate:"CASCADE",
                    onDelete:"CASCADE"
                }
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: defaultValue
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
