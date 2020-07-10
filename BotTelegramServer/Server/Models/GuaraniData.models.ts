import { Model, Column, Table, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import GuaraniDataInterface from '../Interfaces/GuaraniData.interface';
@Table(
    {
      tableName: "Guarani_data",
      timestamps: true,
    }
  )
class GuaraniData extends Model<GuaraniData> implements GuaraniDataInterface{
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.NUMBER)
    dni?: number
  
    @Column(DataTypes.STRING)
    email!: string;
  
    @Column(DataTypes.STRING)
    profile!: string;
  
    @CreatedAt
      @Column(DataTypes.DATE)
      createdAt: Date;
    
      @UpdatedAt
      @Column(DataTypes.DATE)
      updatedAt: Date;

}


export default GuaraniData;