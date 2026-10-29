import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // biome-ignore lint/complexity/noThisInStatic: Sequelize precisa inicializar o modelo User via super.
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'users',
        underscored: true,
      },
    );
  }
}
export default User;
