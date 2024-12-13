import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config/database'
import { EgressAttributes } from '@type/egress'
import { v4 as uuid } from 'uuid'

export interface EgressCreationAttributes
  extends Optional<EgressAttributes, 'id'> {}

class Egress
  extends Model<EgressAttributes, EgressCreationAttributes>
  implements EgressAttributes
{
  public id!: string
  public description!: string
  public monto!: number
  public fecha!: Date
}

Egress.init(
  {
    id: { type: DataTypes.UUID, defaultValue: uuid, primaryKey: true },
    description: { type: DataTypes.STRING, allowNull: false },
    monto: { type: DataTypes.NUMBER, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize,
    tableName: 'egress',
    timestamps: false
  },
)

export default Egress
