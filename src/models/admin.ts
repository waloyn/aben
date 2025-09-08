
import { Sequelize, DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

export class Admin extends Model {
    public id!: number;
    public username!: string;
    public password!: string;

    public async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

export const defineAdmin = (sequelize: Sequelize) => {
    Admin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: new DataTypes.STRING(128),
                allowNull: false,
                unique: true,
            },
            password: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
        },
        {
            tableName: 'admins',
            sequelize,
            hooks: {
                beforeCreate: async (admin: Admin) => {
                    const salt = await bcrypt.genSalt(10);
                    admin.password = await bcrypt.hash(admin.password, salt);
                },
                beforeUpdate: async (admin: Admin) => {
                    if (admin.changed('password')) {
                        const salt = await bcrypt.genSalt(10);
                        admin.password = await bcrypt.hash(admin.password, salt);
                    }
                },
            },
        }
    );
    return Admin;
};
