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
  name: string;

  @Column({
    type: DataType.FLOAT,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  availability: boolean;
}

export default Product;