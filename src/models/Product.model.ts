import { Column, DataType, Default, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "products",
})
class Product extends Model {
  // @Column
  // name: string;

  // @Column
  // price: number;

  // @Column
  // availability: boolean;

  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;

  @Column({
    type: DataType.FLOAT,
  })
  declare price: number;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  declare availability: boolean;
}

export default Product;